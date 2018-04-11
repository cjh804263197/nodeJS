const express = require('express')

var server = express()

server.listen(8080)

// 目录1:当访问路径中有/user/时，则执行以下路由
var userRoute = express.Router()

// 当访问路径为http://localhost:8080/user/1.html时，执行下面
userRoute.get('/1.html', (req, res) => {
    res.send('user1')
})

// 当访问路径为http://localhost:8080/user/2.html时，执行下面
userRoute.get('/2.html', (req, res) => {
    res.send('user2')
})

// 举一反三
// 目录1-1:当访问路径中有/user/car/
var carRoute = express.Router()

// 当访问路径为http://localhost:8080/user/car/1.html时，执行下面
carRoute.get('/1.html', (req, res) => {
    res.send('user-car1')
})

// 当访问路径为http://localhost:8080/user/car/2.html时，执行下面
carRoute.get('/2.html', (req, res) => {
    res.send('user-car2')
})
// 设置user路由上绑定car路由
userRoute.use('/car', carRoute)

// 目录2:当访问路径中有/hourse/时，则执行以下路由
var hourseRoute = express.Router()

// 当访问路径为http://localhost:8080/hourse/a.html时，执行下面
hourseRoute.get('/a.html', (req, res) => {
    res.send('hourse-a')
})

// 当访问路径为http://localhost:8080/hourse/b.html时，执行下面
hourseRoute.get('/b.html', (req, res) => {
    res.send('hourse-b')
})

// 关键，最后要将该路由绑定到express上
server.use('/user', userRoute)
server.use('/hourse', hourseRoute)