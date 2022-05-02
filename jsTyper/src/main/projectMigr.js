const path = require('path')
const fs = require('fs')
const { fileURLToPath } = require('url')
const {
  Project,
  TypeFormatFlags,
  SyntaxKind,
  IndentationText,
} = require('ts-morph')
const fastGlob = require('fast-glob')
const os = require('os')

const createDir = (kind) => {
  fs.mkdirSync(kind, { recursive: true }, (error) => {
    if (error) {
      console.error('An error occured:', error)
    } else {
      console.log('Your directory is made!')
    }
  })
}

const home = os.homedir() + '/' + 'jstyperOutput/'

const projectMigr = (directory, progressBar, fileNum, option, saveDir) => {
  let JsFiles = fastGlob.sync(`**/*.js`, {
    cwd: directory,
    absolute: true,
    followSymbolicLinks: true,
    ignore: ['**/node_modules/**'],
  })

  if (option === 'newDir') {
    createDir(saveDir)
  } else if (option !== 'sameDir' && option !== 'newDir') {
    createDir(home)
  }

  fileNum.total = JsFiles.length
  JsFiles.forEach((filePath, index) => {
    fileNum.num = index + 1
    const project = new Project({
      manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
      },
    })

    const fileName = path.basename(filePath)
    const fileDirWithout = path.dirname(filePath)
    progressBar.value = 10

    const sourceFile = project.createSourceFile(
      './temp.ts',
      fs.readFileSync(filePath).toString()
    )

    progressBar.value = 20
    sourceFile.forEachDescendant((node, traversal) => {
      progressBar.value = 30
      switch (node.getKind()) {
        // Variables Case
        case SyntaxKind.VariableDeclaration:
          progressBar.value = 40
          const typeFinding = node
            .getType()
            .getText(
              node,
              TypeFormatFlags.NoTruncation |
                TypeFormatFlags.WriteArrayAsGenericType
            )
          if (node.hasInitializer()) {
            const initiaLl = node.getInitializer().getText().toString()
            if (initiaLl.includes('querySelector')) {
              node.setType('HTMLElement | any')
            } else if (node) {
              if (typeFinding == 'any') {
                node.setType(typeFinding)
              } else {
                node.setType(`${typeFinding} | any`)
              }
            } else {
              console.log('nothing found')
            }
          }

          traversal.skip()
          progressBar.value = 50
          break
        // Functions Case
        case SyntaxKind.FunctionDeclaration:
          progressBar.value = 60
          // Setting up parameters types and optionals
          const funcParams = node.getParameters()
          funcParams.forEach((funcParamSingle) => {
            const typeParam = funcParamSingle
              .getType()
              .getText(
                node,
                TypeFormatFlags.NoTruncation |
                  TypeFormatFlags.WriteArrayAsGenericType
              )
            if (typeParam !== 'any') {
              funcParamSingle.setType(typeParam)
            } else {
              funcParamSingle.setType('any')
            }
            if (
              !funcParamSingle.isRestParameter() &&
              !funcParamSingle.hasInitializer()
            ) {
              funcParamSingle.setHasQuestionToken(true)
            }
          })
          // Variables whithin a function
          node.getVariableDeclarations().forEach((variableInFunc) => {
            if (variableInFunc) {
              const variableType = variableInFunc
                .getType()
                .getText(
                  node,
                  TypeFormatFlags.NoTruncation |
                    TypeFormatFlags.WriteArrayAsGenericType
                )
              if (variableInFunc.hasInitializer()) {
                const initiaLl = variableInFunc
                  .getInitializer()
                  .getText()
                  .toString()
                if (initiaLl.includes('querySelector')) {
                  variableInFunc.setType('HTMLElement | any')
                } else if (variableInFunc) {
                  if (variableType == 'any') {
                    variableInFunc.setType(variableType)
                  } else {
                    variableInFunc.setType(`${variableType} | any`)
                  }
                } else {
                  console.log('nothing found')
                }
              } else {
                variableInFunc.setType('any')
              }
            }
          })

          // nested If statements whithin a function
          const statementsNested = node.getDescendantsOfKind(
            SyntaxKind.IfStatement
          )
          statementsNested.forEach((statie) => {
            const variablesDecs = statie.getDescendantsOfKind(
              SyntaxKind.VariableDeclaration
            )
            variablesDecs.forEach((varie) => {
              const typeFinding = varie
                .getType()
                .getText(
                  varie,
                  TypeFormatFlags.NoTruncation |
                    TypeFormatFlags.WriteArrayAsGenericType
                )
              if (varie.hasInitializer()) {
                const initiaLl = varie.getInitializer().getText().toString()
                if (initiaLl.includes('querySelector')) {
                  varie.setType('HTMLElement | any')
                } else if (varie) {
                  if (typeFinding == 'any') {
                    varie.setType(typeFinding)
                  } else {
                    varie.setType(`${typeFinding} | any`)
                  }
                } else {
                  console.log('nothing found')
                }
              } else {
                varie.setType('any')
              }
            })
          })
          progressBar.value = 70

          traversal.skip()
          break
        // If statements case
        case SyntaxKind.IfStatement:
          progressBar.value = 80
          const variableDecs = node.getDescendantsOfKind(
            SyntaxKind.VariableDeclaration
          )
          variableDecs.forEach((ele) => {
            const typeFinding = ele
              .getType()
              .getText(
                ele,
                TypeFormatFlags.NoTruncation |
                  TypeFormatFlags.WriteArrayAsGenericType
              )
            if (ele.hasInitializer()) {
              const initiaLl = ele.getInitializer().getText().toString()
              if (initiaLl.includes('querySelector')) {
                ele.setType('HTMLElement | any')
              } else if (ele) {
                if (typeFinding == 'any') {
                  ele.setType(typeFinding)
                } else {
                  ele.setType(`${typeFinding} | any`)
                }
              } else {
                console.log('nothing found')
              }
            } else {
              ele.setType('any')
            }
          })

          traversal.skip()
          break
        case SyntaxKind.InterfaceDeclaration:
          progressBar.value = 90

          return node
      }
      return undefined
    })
    const fileNameTs = fileName.slice(0, -3) + '.ts'
    const code = sourceFile.getFullText()
    const createTsFile = (optionForDir) => {
      fs.writeFile(`${optionForDir + fileNameTs}`, code, function (err) {
        if (err) throw err
        console.log(err)
      })
    }
    if (option === 'newDir') {
      createTsFile(saveDir + '/')
    } else if (option === 'sameDir') {
      createTsFile(fileDirWithout + '/')
    } else {
      createTsFile(home)
    }
  })
  progressBar.value = 100

  progressBar.setCompleted()

  require('child_process').exec(
    `start "" "${
      option === 'newDir' ? saveDir : option === 'sameDir' ? directory : home
    }"`
  )

  return 'works AF'
}

exports.projectMigr = projectMigr
