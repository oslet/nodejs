var net=require('net');

var client=new net.Socket();

client.setEncoding('utf8');

client.connect(42367,"192.168.2.10");

client.on('data',function(data){
  console.log(data);
});
