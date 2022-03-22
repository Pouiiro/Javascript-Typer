const routes = require('./routes')
const fastify = require('fastify')({
  logger: true
})


fastify.register(require('fastify-cors'), {
  origin: true
})

routes.forEach((route, index) => {
  fastify.route(route)
})

fastify.get('/', async (request, reply) => {
  return { hello: 'JsTyper API' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()