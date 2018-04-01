const express = require('express')
const querystring = require('querystring')

var server = express()
server.listen(8080)

// 如果use没有第一个参数，那么默认拦截所有请求
server.use((req, res, next) => {
    var str = ''
    req.on('data', data => {
        str += data
    })

    req.on('end', () => {
        req.body = querystring.parse(str)
        // 当所有数据接受完，并转化为对象后，调用next()函数执行下一个拦截
        next()
    })
})

// GET,POST
server.use('/', (req, res) => {
    console.log(req.body)
})

