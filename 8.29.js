var https=require('https');
var options={
  hostname: 'npmjs.org',
  port: '443',
  path: '/',
  method: 'GET',
  agent: false
};
var req=https.get(options,function(res){
  console.log('状态码为 ' +res.statusCode);
  console.log('响应头为 ' +JSON.stringify(res.headers));
  res.setEncoding('utf8');
  req.on('data',function(chunk){
    console.log('响应内容' +chunk);
  });
});
req.setTimeout(1000,function(){
  req.abort();
});

req.on('error',function(err){
  if (err.code==="ENCONNRESET")
    console.log('socket端口超时')
  else
    console.log('在请求数据过程中发生错误，错误代码为'+err.code);
});
