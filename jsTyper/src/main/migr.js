const path = require('path')
const { fileURLToPath } = require('url')
const {
  Project,
  TypeFormatFlags,
  SyntaxKind,
  IndentationText,
} = require('ts-morph')

const morphProject = (code, progressBar) => {
  progressBar.value = 0

  const project = new Project({
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
    },
  })

  progressBar.value = 10

  const sourceFile = project.createSourceFile('./temp.ts', code)

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
  progressBar.value = 100
  progressBar.setCompleted()
  return sourceFile.getFullText()
}

exports.morphProject = morphProject
