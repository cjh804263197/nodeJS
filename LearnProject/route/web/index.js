const express = require('express')
const mysql = require('mysql')

var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Learn'
})

module.exports = function () {
    var router = express.Router()

    router.get('/get_banners', (req, res) => {
        db.query('select * from banner_table', (err, data) => {
            if(err){
                console.error(err)
                res.status(500).send('database error')
            }else{
                res.send(data).end()
            }
        })
    })

    return router
}