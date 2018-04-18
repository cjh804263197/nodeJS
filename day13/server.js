const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-parser')
// const jade = require('jade')
// const ejs = require('ejs')
// 引用模板引擎后就不用单独引用模板引擎 例如jade ejs了
const consolidate = require('consolidate')
const multer = require('multer')
const mysql = require('mysql')
const moment = require('moment')

// 创建一个数据库连接池，保持存在一部分可用连接，避免用户每次请求都去创建连接，浪费资源
const db_pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test1'
    }
)

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
server.set('views', './www/template/')
// 3.使用哪种模板引擎 当需要编译html时，就使用ejs作为模板引擎
server.engine('html', consolidate.ejs)

// 使用链式操作处理一个页面有多次查询
server.get('/', (req, res, next) => {
    // 查询banner中的数据
    db_pool.query("SELECT * FROM Banner", (err, results) => {
        if (err) {
            res.status(500).send('数据库连接失败').end()
        } else {
            res.banners = results
            next()
        }
    })
})

server.get('/', (req, res, next) => {

    // 查询article中的数据列表
    db_pool.query("SELECT id,title,summary FROM Article", (err, results) => {
        if (err) {
            res.status(500).send('数据库连接失败').end()
        } else {
            res.articles = results
            next()
        }
    })
})

server.get('/', (req, res) => {
    // 渲染并返回index.html
    res.render('index.ejs', {
        banners: res.banners,
        articles: res.articles
    })
})

// 处理点击文章详情后的请求
server.get('/detail', (req, res) => {
    if (req.query.id) {
        db_pool.query(`SELECT * FROM Article WHERE id=${req.query.id}`, (err, data) => {
            if (err) {
                res.status(500).send('查询异常').end()
            } else {
                if (data.length === 0) {
                    res.status(404).send('您请求得文章找不到！').end()
                } else {
                    res.render('conText.ejs', {
                        article: {
                            ...data[0], 
                            publish_time: moment(data[0].publish_time).format('YYYY-MM-DD HH:mm:ss'),
                            content: data[0].content.replace(/^/gm, '<p>').replace(/$/gm, '</p>') // 使用正则表达式给行首行尾增加<p></p>
                        }
                    })
                }
            }
        })
    } else {
        res.status(404).send('您请求得文章找不到！').end()
    }
})

// static数据
server.use(static('./www'))