var http=require('http');
var server=http.createServer(function(req,res){
  // etc.
}).listen('1337','127.0.0.1',function(){
  console.log('服务端开始监听')
})
