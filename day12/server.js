const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-parser')
// const jade = require('jade')
// const ejs = require('ejs')
// 引用模板引擎后就不用单独引用模板引擎 例如jade ejs了
const consolidate = require('consolidate')

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
// server.use('/', function (req, res, next) {
//     console.log('get=',req.query, ' post=', req.body, ' cookies=', req.cookies, ' session=', req.session)
// })

// 配置模板引擎，以下三个步骤
// 1.输出什么东西（为用户呈现什么东西）
server.set('view engine', 'html')
// 2.模板文件放到哪了
server.set('views', './views')
// 3.使用哪种模板引擎 当需要编译html时，就使用ejs作为模板引擎
server.engine('html', consolidate.ejs)

// 接受用户请求
server.get('/index', (req, res) => {
    // res.send()与res.render()的区别
    // res.send() 直接向用户发送内容
    // res.render() 编译一些东西，并且将编译的东西发送给用户
    res.render('1.ejs', {name: '陈'})
})

// static数据
server.use(static('./www'))