var http = require('http')
const urlLib = require('url')

var server = http.createServer((req,res)=>{
    console.log(req.url+'/n')
    // 
    var obj = urlLib.parse(req.url,true)
    // 获取请求路径
    var url = obj.pathname
    // 获取请求参数
    var get = obj.query
    console.log(url)
    console.log(get)
})

server.listen(8080)