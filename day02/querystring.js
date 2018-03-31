const querystring = require('querystring')

var json = querystring.parse('username=123&password=456')

console.log(json)