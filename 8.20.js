var http=require('http');
var options={
  hostname: '1.2.3.4',
  port: '80',
  path: '/',
  method: 'GET'
};
var req=http.request(options,function(res){
  console.log('状态码: '+ res.statusCode);
  console.log('响应头: '+JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data',function(chunk){
    console.log('响应内容: '+chunk);
  });

  req.setTimeout(1000,function(){
    req.abort();
  });
  req.on('error',function(err){
    if(err.code === "ENCONNRESET")
      console.log("socket端口超时");
    else
      console.log('在请求数据过程中发生错误，错误代码为: '+err.code);
  });
});
req.end();
