var fs=require('fs');
fs.realpath('./message.txt',function(err,rePath){
  if(err) throw err;
  console.log(rePath);
});
