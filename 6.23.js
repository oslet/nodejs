var fs=require('fs');
fs.chmod('./message.txt',0600,function(err){
  if(err) console.log("修改文件操作权限失败");
  else console.log("修改文件操作权限成功");
})
