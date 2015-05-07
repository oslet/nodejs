var net=require('net');
var server=net.createServer();
server.on('connection',function(socket){
  socket.on('data',function(data){
    console.log(data);
  });
});
server.listen(8431,'localhost');
