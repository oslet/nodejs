var http=require('http');
var server=http.createServer();

server.on('request',function(req,res) {
if(req.url!=="/favicon.ico"){
console.log(req.url);
}
res.end();
});
server.listen(1337,"127.0.0.1");

