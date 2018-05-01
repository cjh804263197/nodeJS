const crypto = require('crypto')

module.exports={
    MD5_SUFFIX: 'newhueibjerheufif&&ceiowcowencon', // 加密后缀 随便写
    md5(str){
        var obj = crypto.createHash('md5')
        obj.update(str + this.MD5_SUFFIX)
        var md5Str = obj.digest('hex')
        return md5Str
    }
}

