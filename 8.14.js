var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon.ico"){
    res.setHeader('Context-Type','text/html');
    if(res.headerSent) console.log('响应头已发送');
    else console.log('响应头未发送');
    res.write('<html><head><meta charset="utf-8"/></head>');
    if(res.headerSent) console.log('响应已发送');
    else console.log('响应头未发送');
    res.write("你好");
  }
  res.end();
}).listen(1337,"localhost");
