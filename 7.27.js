var port=8088;
var host='192.168.2.10';
var dgram=require('dgram');
var client=dgram.createSocket('udp4');
client.on('listening',function(){
  client.addMembership('230.185.192.108');
});
client.on('message',function(message,remote){
  console.log(message.toString());
});
client.bind(port,host);
