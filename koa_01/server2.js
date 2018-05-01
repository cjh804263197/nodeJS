// 导入koa,在koa2.x版本中，导入的是一个class
const Koa = require('koa')
// 创建一个Koa对象
var server = new Koa()
server.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
})
server.use(async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log('Times=',ms)
})
// 对于任何请求，server将调用该异步函数处理请求
server.use(async(ctx, next) => {
    await next()
    ctx.response.type='text/html'
    ctx.response.body='<h1>Hello,Koa</h1>'
})

server.listen(8080)

