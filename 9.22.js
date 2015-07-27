var cp=require('child_process');
var sp1=cp.fork('./test/test1.js',['one','two','three','four'],
                {silent:true});
var sp2=cp.fork('9.23.js');
sp1.stdout.on('data',function(data){
  console.log('child process stdout: '+data);
  sp2.send(data.toString())
});
sp1.on('exit',function(code,signal){
  console.log('child process exit,code :'+code);
  process.exit();
});
sp1.on('error',function(err){
  console.log('child process open failure :'+err);
  process.exit();
});
