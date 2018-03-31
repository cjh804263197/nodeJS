const fs = require('fs')

// 读取文件
fs.readFile('aaa.txt', function(err, data){
    if(err){
        console.log('出错了')
    }else{
        console.log(data.toString())
    }
})

fs.writeFile('bbb.txt','我是bbb',(err, data)=>{
    console.log(err);
    console.log(data);
})