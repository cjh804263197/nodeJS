const express = require('express')
const bodyparser = require('body-parser')

var server = express()
server.listen(8080)

// 需要引入bodyparser中间件来获取到req.body
server.use(bodyparser.urlencoded({
    extended: false,  // 扩展模式
    limit: 2*1024 // 限制post包的大小 默认100k
}))

// GET,POST
server.use('/', (req, res) => {
    console.log(req.body)
})

