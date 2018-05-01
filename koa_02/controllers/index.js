var fn_get_login = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

var fn_post_login = async (ctx, next) => {
    let username = ctx.request.body.name
    let password = ctx.request.body.password
    console.log(`signin with name: ${username}, password: ${password}`)
    if (username === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${username}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="./">Try again</a></p>`;
    }
}

module.exports = {
    'GET /login': fn_get_login,
    'POST /login': fn_post_login
}