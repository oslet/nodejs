var fs=require('fs');
var files=fs.rename('./message.txt','./test/test.txt',function(err){
  if(err) console.log('文件移动操作失败');
  else console.log('文件移动操作成功');
})
