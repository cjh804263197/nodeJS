var http = require('http')
const fs = require('fs')

var server = http.createServer((req,res)=>{
    const webRoot = './www'
    // 拼接文件名
    var file_name = webRoot + req.url

    fs.readFile(file_name,(err,data)=>{
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(8080)