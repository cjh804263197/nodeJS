const express = require('express')
const myBodyParser = require('./lib/my-body-parser')

var server = express()
server.listen(8080)

// 如果use没有第一个参数，那么默认拦截所有请求
server.use(myBodyParser.urlencoded())

// GET,POST
server.use('/', (req, res) => {
    console.log(req.body)
})

