var fs=require('fs');
try {
var data=fs.readFileSync('./test.txt','utf8');
console.log(data);
}
catch(ex){
console.log('读取文件时发生错误.');
}
