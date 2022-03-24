const boom = require('boom')
const axios = require('axios')

const {findQuery} = require('ast-node-finder')
const {parse} = require('recast')




exports.test = (req, reply) => {
  const status = 'works'
  reply.send(status)
}

exports.parser =  (req, reply) => {
    let code = "console.log('no code')"
    if (req.query.code !== undefined && req.query.code !== '') {
        code = req.query.code
    }
    const ast = parse(code);
    reply.send(ast.program.body)
}