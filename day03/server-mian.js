const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var server = http.createServer((req, res) => {
    // GET
    var urlObj = urlLib.parse(req.url, true)
    var url = urlObj.pathname
    const GET = urlObj.query
    console.log(GET)

    // POST
    var str = ''
    // 数据到达监听
    req.on('data', data => {
        str += data
    })
    // 全部到达监听
    req.on('end', () => {
        const POST = querystring.parse(str)

        console.log(url, GET, POST)
    })

    // 读取文件
    var file_name = './www'+url
    fs.readFile(file_name, (err, data) => {
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(8080)

