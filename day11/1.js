const ejs = require('ejs')

ejs.renderFile('./views/1.ejs', {name: '陈嘉辉'}, (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})