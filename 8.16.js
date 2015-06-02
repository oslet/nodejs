var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon.ico"){
    fs.readFile('test.txt',function(err,data){
      if(err) console.log('读取文件时发生错误。');
      // console context
      else {
        var flag=res.write(data);
      console.log(flag);
        res.end();
      }
    });
  }
}).listen(1337,'localhost');
