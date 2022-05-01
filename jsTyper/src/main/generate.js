const fs = require('fs')

const generateTs = async (content, dirPath, fileName) => {
  const fileNameTs = fileName.slice(0, -3) + '.ts'
  const createDir = () => {
    fs.mkdirSync(dirPath, { recursive: true }, (error) => {
      if (error) {
        console.error('An error occured:', error)
      } else {
        console.log('Your directory is made!')
      }
    })
  }

  const createTsFile = () => {
    fs.writeFile(`${dirPath + '/' + fileNameTs}`, content, function (err) {
      if (err) throw err
      console.log(err)
    })
  }

  createDir()
  createTsFile()
  require('child_process').exec(`start "" "${dirPath}"`)
  console.log(`Done! File generated in ${dirPath}`)
  return `Done! File generated in ${dirPath}`
}

exports.generateTs = generateTs
