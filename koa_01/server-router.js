// 导入koa,在koa2.x版本中，导入的是一个class
const Koa = require('koa')

const bodyParser = require('koa-bodyparser')
// 注意require('koa-router')返回的时函数，其相当于
// const fn_router = require('koa-router')
// const router = fn_router()
const router = require('koa-router')()
// 创建一个Koa对象
var server = new Koa()

server.use(bodyParser())

server.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
})
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name
    ctx.response.body=`<h1>Hello,${name}</h1>`
})
router.get('/', async (ctx, next) => {
    ctx.response.body='<h1>Index</h1>'
})

router.get('/login', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
})

router.post('/login', async (ctx, next) => {
    let username = ctx.request.body.name
    let password = ctx.request.body.password
    console.log(`signin with name: ${username}, password: ${password}`)
    if (username === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${username}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
})
// 添加router中间件
server.use(router.routes())

server.listen(8080)

