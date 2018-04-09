const jade = require('jade')

var str = jade.renderFile('./views/1.jade', {pretty: true})

// 不设置{pretty: true}
//则输出：<html><head><style></style><script></script></head><body><div><ul><li></li><li></li></ul></div><div></div></body></html>
// 设置{pretty: true}
// 则输出
/* <html>
  <head>
    <style></style>
    <script></script>
  </head>
  <body>
    <div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div></div>
  </body>
</html> */
console.log(str)