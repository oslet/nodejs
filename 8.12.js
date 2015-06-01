var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon"){
    res.setHeader("Content-Type","text/plain");
    res.setHeader("Access-Control-Allow-Origin","http://localhost");
    res.removeHeader(Access-Control-Allow-Origin);
    res.write("你好");
  }
  res.end();
}).listen(1337,"localhost");
