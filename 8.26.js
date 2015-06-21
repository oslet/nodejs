/*
1. create private key
openssl genrsa -out privatekey.pem 1024

2.create certificate signing request
openssl req -new -key privatekey.pem -out certrequest.csr

3.get certificate file
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

4.convert to pkcs12
openssl pkcs12 -export -in certificate.pem -inkey privatekey.pem -out certificate.pfx
 */

var https=require('https');
var fs=require('fs');
var pk=fs.readFileSync('./privatekey.pem');
var pc=fs.readFileSync('./certificate.pem');
var opts={
  key: pk,
  cert: pc
};
var server=https.createServer(opts,function(req,res){
  console.log(req.url);
  if(req.url!=="/favicon.ico"){
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><meta charset="utf-8"/></head>');
    res.write("你好");
    res.end();
  }
});
server.listen(443,'localhost');
server.on('listening',function(){
  console.log('服务端开始监听');
  server.close();
});
server.on('close',function(){
  console.log('服务器已被关闭');
});
