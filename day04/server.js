const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')
/**
 * /user?act=reg&user=aaa&pass=bbb
 *  {ok: false}
 */

let server = http.createServer((req, res) => {
    // 解析数据
    let str = ''
    req.on('data', data => {
        str += data
    })

    req.on('end', () => {
        let urlObj = urlLib.parse(req.url, true);

        let url = urlObj.pathname
        let GET = urlLib.query
        let POST = querystring.parse(str)
    })

    // 区分接口或文件
    if(url === '/user'){
        switch (GET.act){
            case 'reg':
            
            break
            case 'login':
            break
            default:
            res.write('{"ok": false,"msg": "未知的act"}')
        }
        res.end()
    }else{
        // 读取文件

    }
    

})

server.listen(8080)