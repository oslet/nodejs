var fs=require('fs');
fs.unlink('./test/test.txt',function(err){
  if(err) console.log('删除硬链接操作失败');
  else console.log('删除硬链接操作成功');
})
