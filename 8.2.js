var http=require('http');
var server=http.createServer(function(req,res){
  // etc.
}).listen(1337,"127.0.0.1");
server.on('listening',function(){
  console.log('服务器开始监听');
  server.close();
});
server.on('close',function(){
  console.log('服务器已关闭');
})
