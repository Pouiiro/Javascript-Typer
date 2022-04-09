const fs = require('fs')

    
    const createDir = (dirPath) => {
        fs.mkdirSync(process.cwd() + dirPath, { recursive: true}, (error) => {
            if (error) {
                console.error('An error occured:', error)           
            } else {    
                console.log('Your directory is made!')
            }
        })
    }

    const createFile = (content) => {
        fs.writeFile('output/script.ts', content, function (err) {
            if (err) throw err; console.log('Results Received');
          }); 
    }

   

module.exports = {createDir,createFile }

