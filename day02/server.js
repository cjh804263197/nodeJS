var http = require('http')

var server = http.createServer((req,res)=>{
    console.log(req.url)
    
})

server.listen(8080)