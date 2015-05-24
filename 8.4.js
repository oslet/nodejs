var http=require('http');
var server=http.createServer(function(req,res){
  // etc.
}).listen(1337,"127.0.0.1")
server.on('connection',function(socket){
  console.log('客户端已建立连接');
});
