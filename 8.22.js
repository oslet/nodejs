var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon.ico"){
    req.on('data',function(data){
      console.log('服务器端接收到的数据: '+data);
      res.end();
    });
  }
}).listen(1337,"localhost");
