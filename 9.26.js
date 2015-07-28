var http=require('http');
var option={
  hostname: 'localhost',
  port: 1337,
  path: '/',
  method: 'GET'
};

for(var i=0;i<20;i++){
  var req=http.request(option,function(res){
    res.on('data',function(chunk){
      console.log('响应内容 :'+chunk);
    });
  });
  req.end();
}
