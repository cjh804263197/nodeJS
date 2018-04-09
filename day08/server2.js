const experss = require('express')
const cookieparser = require('cookie-parser')

var server = experss()

server.listen(8080)

server.use(cookieparser())

// cookie
server.use('/aaa', (req, res) => {
    console.log(req.cookies)
    res.send('ok')
})