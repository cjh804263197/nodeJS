const experss = require('express')
const cookieparser = require('cookie-parser')
const cookiesession = require('cookie-session')

var server = experss()

server.listen(8080)

server.use(cookieparser())
// 要放到cookieparser后面，因为只有将cookie解析出来之后才能通过sessionId来获取session
server.use(cookiesession({
    name: 'sess', // session别名 在浏览器端的cookie中保存的名称
    keys: ['aaa', 'bbb', 'ccc'],// session秘钥，不设置会报错
    maxAge: 3600*1000 // 单位ms
}))

// cookie
server.use('/', (req, res) => {
    // 记录当前用户访问了多少次
    if(req.session['count'] === null) {
        req.session['count'] = 1 
    } else {
        req.session['count']++
    }

    console.log(req.session['count'])
    res.send('ok')
})