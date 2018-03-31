const express = require('express')

// 初始化server
var server = express()

server.use('/a.html', (req, res) => {
    res.send('abc')
    res.end()
})

server.use('/b.html', (req, res) => {
    res.send('123')
    res.end()
})

server.use('/json.html', (req, res) => {
    // 注意使用原生的write方法会报错，因为write函数期望的第一个参数是String或者Buffer
    // res.write({a: 123, b: 'haha'})
    res.send({a: 123, b: 'haha'})
    res.end()
})

server.listen(8080)