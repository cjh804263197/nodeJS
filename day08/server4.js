const experss = require('express')
const cookieparser = require('cookie-parser')
const cookiesession = require('cookie-session')

var server = experss()

server.listen(8080)

server.use(cookieparser())
// 要放到cookieparser后面，因为只有将cookie解析出来之后才能通过sessionId来获取session
server.use(cookiesession({
    keys: ['aaa', 'bbb', 'ccc']
}))

// cookie
server.use('/', (req, res) => {
    console.log(req.session)
    res.send('ok')
})