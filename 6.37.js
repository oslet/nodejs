var fs=require('fs');
var file=fs.createReadStream('./message.txt',{start:3,end:12});
file.on('open',function(fd){
  console.log('开始读取文件');
})

file.on('data',function(data){
  console.log('读取到数据: ');
  console.log(data);
});

file.on('end',function(){
  console.log('文件已被全部读取');
});

file.on('close',function(){
  console.log('文件被关闭.');
})

file.on('error',function(err){
  console.log('读取文件失败');
});
