var fs=require('fs');
var func1=function(curr,prev){
  if(Date.parse(prev.ctime)==0)
     console.log('message1.txt文件被创建');
     else if(Date.parse(curr.ctime)==0)
       console.log('message1.txt文件被删除');
     else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime))
       console.log('message1.txt文件内容被修改');
};

var func2=function(curr,prev){
  if(Date.parse(curr.ctime)!=0)
    console.log('message1.txt文件尺寸为'+curr.size+' 字节');
};

fs.watchFile('./message1.txt',func1);
fs.watchFile('./message1.txt',func2);
fs.unwatchFile('./message.txt',func2);
