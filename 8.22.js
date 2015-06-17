var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url!=="/favicon.ico"){
    req.on('data',function(data){
      console.log('服务器端接收到的数据: '+data);
      res.write('确认数据: '+data);
      //      req.on('end',function(){res.end();})
      req.on('end',function(){
        res.addTrailers({'Content-MD5':'7895bf4b8828b55ceaf47747b4bca667'})
        res.end();
      })
//      res.end();
    });
  }
}).listen(1337,"localhost");
