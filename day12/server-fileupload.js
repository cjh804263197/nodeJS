const express = require('express')
// const bodyParser = require('body-parser')
const multer = require('multer')

const fs = require('fs')
const pathObj = require('path')

var server = express()
// 增加文件存放的地址
var upload = multer({dest: './www/upload/'})

server.listen(8080)

// 处理不了上传文件
// server.use(bodyParser.urlencoded({extended: false}))

server.use(upload.any())

server.post('/', function(req, res){
    console.log(req.files)
    var file = req.files[0]
    // 首先获取文件的扩展名
    var ext = pathObj.parse(file.originalname).ext
    // 然后拼接为一个新的文件名
    var newname = file.path + ext
    // 然后将文件重命名
    fs.rename(file.path, newname, function(err){
        if(err){
            res.send('文件上传失败！')
        }else{
            res.send('文件上传成功！')
        }
    })
})
