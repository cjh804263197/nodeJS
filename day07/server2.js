const express = require('express')
const bodyparser = require('body-parser')

var server = express()
server.listen(8080)

// 链式操作
server.use('/', (req, res, next) => {
    console.log('a')
    // 如果想要输出b,那么就调用next()方法,否则默认是到此结束
    next()
})

server.use('/', (req, res, next) => {
    console.log('b')
})