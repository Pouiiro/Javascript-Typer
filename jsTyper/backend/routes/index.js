const jstyperapi = require('../controllers/jstyperapi')

const routes = [
    {
      method: 'GET',
      url: '/test',
      handler: jstyperapi.test
    },
    {
        method: 'GET',
        url: '/parse',
        handler: jstyperapi.parser
    },
    {
      method: 'GET',
      url: '/generate',
      handler: jstyperapi.generate
    }
  ]
  
  module.exports = routes