var child=require('child_process').fork('9.28.js');

var server=require('net').createServer();

server.on('connection',function(socket){
  if(socket.remoteAddress!=="192.168.2.10"){
    child.send('socekt',socket);
    return;
  }
  socket.end('客户端请求被父进程处理');
});

server.listen(42367,"192.168.2.10");
