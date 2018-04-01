const querystring = require('querystring')

module.exports = {
    urlencoded: function(){
        return function(req, res, next){
            var str = ''
            req.on('data', data => {
                str += data
            })
        
            req.on('end', () => {
                req.body = querystring.parse(str)
                // 当所有数据接受完，并转化为对象后，调用next()函数执行下一个拦截
                next()
            })
        }
    }
}
