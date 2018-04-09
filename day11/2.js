const ejs = require('ejs')

ejs.renderFile('./views/2.ejs', {json: {arr: [
    {name: '张三', age: 12},
    {name: '李四', age: 23},
    {name: '王五', age: 34},
    {name: '赵柳', age: 45}
]}}, (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})