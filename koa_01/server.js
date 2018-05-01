// 导入koa,在koa2.x版本中，导入的是一个class
const Koa = require('koa')

var server = new Koa()

server.use(async(ctx, next) => {
    await next()
    ctx.response.type='text/html'
    ctx.response.body='<h1>Hello,Koa</h1>'
})

server.listen(8080)

