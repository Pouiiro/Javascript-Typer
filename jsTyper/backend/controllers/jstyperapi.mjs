import boom from 'boom'
import axios from 'axios'
import {findQuery} from 'ast-node-finder'
import  {parse} from 'recast'
import  {createFile, createDir} from '../funcs/generator'
import  * as ts from 'typescript';

const sourceFile = ts.createSourceFile(
  'file.ts', // filePath
  'function myFunction() {}', // fileText
  ts.ScriptTarget.Latest, // scriptTarget
  true // setParentNodes -- sets the `parent` property
);
console.log(sourceFile);

exports.test = (req, reply) => {
  const status = 'works'
  reply.send(status)
}

exports.parser =  (req, reply) => {
    let code = "console.log('no code')"
    if (req.query.code !== undefined && req.query.code !== '') {
        code = decodeURI(req.query.code)
    }
    const ast = parse(code);
    reply.send(ast.program.body)
}


exports.generate = (req, reply) => {
  const path = "/output"
  let content = "NaN"
  content = req.query.data
  console.log(JSON.parse(content));
  createDir(path)
  createFile(content)
  reply.send('Done')
}




