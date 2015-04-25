var fs=require('fs');
fs.symlink(__dirname+'./message.txt','./anothermessage.txt','file',function(err){
  if(err) console.log('创建符号链接操作失败');
  else{
    fs.readlink('./anothermessage.txt',function(err,linkString){
      if(err) console.log('读取符号链接操作失败');
    });
  }
});
