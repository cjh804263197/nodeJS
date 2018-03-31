const url = require('url')

// 传true会自动帮你解析为json
var obj = url.parse("http://localhost:8080/?user=zhang&pass=123456",true)

console.log(obj)