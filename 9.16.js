var cp=require('child_process');
var sp1=cp.spawn('node',['test1.js','one','two','three','four'],{cwd:'./test'});
var sp2=cp.spawn('node',['test2.js'],{stdio:'pipe'});
sp1.stdout.on('data',function(data){
  console.log('child process is stdout: '+data);
  sp2.stdin.write(data);
  sp1.kill();
});
sp1.on('exit',function(code,signal){
  if(!code)
    console.log('child process is exit,code: '+signal);
  else
    console.log('child process is exit,code: '+code);
  process.exit();
});
sp1.on('error',function(err){
  console.log('child process was opend failure: '+err);
  process.exit();
});
