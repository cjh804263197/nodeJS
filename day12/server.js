const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-parser')
const jade = require('jade')
const ejs = require('ejs')

// 创建服务器
var server = express()
// 设置监听端口
server.listen(8080)

/**
 * 思路
 * 1.解析cookie
 * 2.使用session
 * 3.post数据
 * 4.static数据
 */

 // 解析cookie
 server.use(cookieParser('eiwhduiewuewifgewfh'))
 // 使用session
 var arr = []
 for (var i = 0; i < 100000; i++) {
     arr.push('keys'+Math.random())
 }
 server.use(cookieSession(
    {
        name: 'sess_id', // session的名字
        keys: arr, // 
        maxAge: 20*60*1000 // 设置生命周期为20分钟
    }
))
//post数据
server.use(bodyParser.urlencoded({extended: false}))

// 用户请求
server.use('/', function (req, res, next) {
    console.log('get=',req.query, ' post=', req.body, ' cookies=', req.cookies, ' session=', req.session)
})

// static数据
server.use(static('./www'))