var net=require('net');
var server=net.createServer(function(socket){
  console.log('服务端与客户端已建立连接');
});
server.listen('8431','0.0.0.0',function(){
  console.log('服务端开始监听');
});
