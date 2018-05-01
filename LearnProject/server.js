const express = require('express')
const static = require('express-static')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const consolidate = require('consolidate')
const expressRoute = require('express-router')
const multer = require('multer')

// 设置文件上传默认目录
const multerObj = multer({
    dest: './static/upload'
})

var server = express()

server.listen(8080)

// 1.获取请求数据
server.use(bodyParser.urlencoded())

server.use(multerObj.any())

// 2.cookie session
server.use(cookieParser());
(function () { // 避免全局污染，用一个function包起来
    let keys = []
    for (let i = 0; i < 100000; i++) {
        keys[i] = 'a_'+Math.random()
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20*60*1000 //20min
    }))
})()

// 3.模板
server.engine('html', consolidate.ejs)
server.set('views', 'template')
server.set('view engine', 'html')

// 4.route
server.use('/', require('./route/web/index')())

server.use('/admin/', require('./route/admin')())

// 5.default: static
server.use(static('./static/'))

