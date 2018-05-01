const express = require('express')
const common = require('../lib/common')
const mysql = require('mysql')

var db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'Learn'})
module.exports = function () {
    var router = express.Router()

    // 检查登陆状态 所有/admin下的请求都会走这里
    router.use((req, res, next) => {
        if (!req.session['admin_id'] && req.url != '/login') { // 没有登录并且访问url不是login
            res.redirect('/admin/login')
        } else { // 登录了
            next()
        }
    })

    router.get('/login', (req, res) => {
        res.render('admin/login.ejs', {})
    })

    router.post('/login', (req, res) => {
        var username = req.body.username
        var password = common.md5(req.body.password)

        db.query(`select * from admin_table where username='${username}'`, (err, data) => {
            if(err){
                console.error(err)
                res.status(500).send('database error').end()
            }else{
                if(data.length == 0){
                    res.status(404).send('no this admin').end()
                }else{
                    if(data[0].password == password){ //成功
                        req.session['admin_id'] = data[0].ID
                        res.send('login success')
                    }else{
                        res.status(400).send('password id incorrect')
                    }
                }
            }
        })
    })

    return router
}