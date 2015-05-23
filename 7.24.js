var dgram=require('dgram');
var server=dgram.createSocket('udp4');
server.on('message',function(msg){
  var buf=new Buffer('已接收客户端发送的数据:'+msg);
  server.setBroadcast(true);
  server.send(buf,0,buf.length,41235,'192.168.2.255');
});
server.bind('41234','192.168.2.10');
