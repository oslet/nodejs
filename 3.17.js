var http=require('http');
var server=http.createServer();

var testFunction=function(req,res){
  if(req.url!=="/favicon.ico")
    console.log('发送响应完毕。');
};
server.on('request',function(req,res){
  if(req.url!=="/favicon.ico")
    console.log('接收到客户端请求。');
});
server.on('request',function(req,res){
  if(req.url!=="/favicon.ico"){
    console.log(req.url);
  }
  res.end();
});

server.on('require',testFunction);
server.removeListener('request',testFunction);
server.listen(1337,"127.0.0.1");
