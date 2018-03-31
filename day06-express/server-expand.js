const express = require('express')
const expressStatic = require('express-static')

// 创建服务，初始化server
var server = express()

// 监听
server.listen(8080)

// 用户相关数据
var users = {
    'lucy': '123456',
    'eric': '123456',
    'bmob': '123456'
}

// login接口
server.get('/login', (req, res) => {
    var user = req.query['user']
    var pass = req.query['pass']

    if(users[user] === null){
        res.send({ok: false, msg: '用户不存在'})
    } else {
        if(users[user] === pass){
            res.send({ok: true, msg: '登录成功'})
        } else {
            res.send({ok: false, msg: '密码错误'})
        }
    }
    res.end()
})

// 处理访问静态文件请求
server.use(expressStatic('./www'))