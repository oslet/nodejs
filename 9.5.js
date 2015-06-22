var fs=require('fs')
var finished=function(){
  console.log('文件读取完毕');
};
process.nextTick(finished)
var data=fs.readFileSync('./9.5.js');
console.log(data.toString());
//console.log(fs.readFileSync ('./9.5.js').toString());
