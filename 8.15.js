var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon.ico"){
    res.statusCode=404;
    res.sendDate=false;
    res.setHeader('Context-Type','text/html');
    res.write('<html><head><meta charset="utf-8"/></head>');
    res.write("你好");
  }
  res.end();
}).listen(1337,"localhost");
