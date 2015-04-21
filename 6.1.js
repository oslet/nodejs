var fs=require('fs');
fs.readFile('./test.txt',function(err,data){
if(err) console.log('读取文件时发生错误.');
else console.log(data.toString());
});

