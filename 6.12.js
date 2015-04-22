var fs=require('fs');
fs.open('./message.txt','r',function(err,fd){
  var buf=new Buffer(255);
  var bytesRead=fs.readSync(fd,buf,0,9,3);
  console.log(bytesRead);
  console.log(buf.slice(0,bytesRead).toString());
})
