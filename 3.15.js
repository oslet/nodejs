var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
  if(req.url!=="/favicon.ico")
    console.log('接受到客户端请求.');
});
server.on('request',function(req,res){
  if(req.url!=="/favicon.ico"){
    console.log(req.url);
  }
  res.end();
});

server.once('request',function(req,res) {
  if(req.url!=="/favicon.ico")
    console.log('发送响应完毕.');
});

server.listen(1337,"127.0.0.1");
//console.log(server.listeners('request'));
