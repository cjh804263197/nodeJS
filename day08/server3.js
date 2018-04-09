const experss = require('express')
const cookieparser = require('cookie-parser')

var server = experss()

server.listen(8080)

server.use(cookieparser())

// cookie
server.use('/', (req, res) => {
    // 设置签名秘钥
    req.secret = 'duwebduewd'
    // 设置cookie内容以及设置签名为true也就是使用签名
    res.cookie('name', 'chen', {signed: true})
    // 无签名的cookie
    console.log(req.cookies)
    // 已签名的cookie
    console.log(req.signedCookies)
    res.send('ok')
})