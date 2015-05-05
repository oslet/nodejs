var net=require('net');
var server=net.createServer(function(socket){
  console.log('服务端与客户端已建立连接');
});
server.listen('8431','localhost');
server.on('error',function(e){
  if(e.code == 'EADDRINUSE'){
    console.log('服务器地址及端口已被占用.');
  }
});
