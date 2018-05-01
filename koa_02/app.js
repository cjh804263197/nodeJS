const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')

var server = new Koa()

server.use(bodyParser())

server.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
})

server.use(controller())

server.listen(8080)