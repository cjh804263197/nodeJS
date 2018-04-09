const experss = require('express')

var server = experss()

server.listen(8080)

// cookie
server.use('/aaa', (req, res) => {
    // 设置cookie key value path表示在哪个访问路径下可以看到此cookie maxAge:表示cookie的有效期单位ms
    res.cookie('user', 'chen', {path: '/aaa', maxAge: 3600*1000})

    res.send('ok')
})