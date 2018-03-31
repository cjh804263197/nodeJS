// 引入http模块
var http = require('http');
// 创建一个服务
var server = http.createServer(function(req,res){
    console.log(req.url);
    switch(req.url){
        case '/index.html':
        res.write("index");
            break;
        case '/login.html':
        res.write("login");
            break;
        default:
        res.write("404");
            break;
    }
    
    res.end();
});
// 监听-port
server.listen(8080);