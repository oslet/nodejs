var net=require('net');
var file=require('fs').createWriteStream('./message.txt');
var server=net.createServer();
server.on('connection',function(socket){
  socket.pipe(file,{end:false});
  setTimeout(function(){
    file.end('再见');
    socket.unpipe(file);
  },5000);
});
server.listen(8431,'localhost');

//output: 所输入最后一行没有记录，或最后一行是定义的再见字符.
