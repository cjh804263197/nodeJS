var http = require('http')
const querystring = require('querystring')

var server = http.createServer((req,res)=>{
    console.log(req.url+'/n')
    var arr = req.url.split('?')
    var get = querystring.parse(arr[1])
    console.log(get)
})

server.listen(8080)