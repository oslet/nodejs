var fs=require('fs');
fs.watchFile('./message1.txt',function(curr,prev){
  if(Date.parse(prev.ctime)==0)
    console.log('message1.txt文件被创建');
  else if(Date.parse(curr.ctime)==0)
    console.log('message1.txt文件被删除');
  else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime))
    console.log('message1.txt文件内容被修改');
});
