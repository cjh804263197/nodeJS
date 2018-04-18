const mysql = require('mysql')

// 1.连接
// createConnection(连接到哪台服务器, 用户名, 密码, 数据库)
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test1'
})

// 打开数据库连接
db.connect()

// 2.查询
// query(sql语句, 回调函数)
db.query('select * from User', (err, results, fields) => {
    if(err){
        console.log('失败了', err)
    }else{
        console.log('成功了')
        console.log(JSON.stringify(results))
        console.log(JSON.stringify(fields))
    }
})

// 关闭数据库连接
db.end()

