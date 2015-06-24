/*

child_process.spawn(command,[args],[options])

command: must be need

args: as array,default is nulll

options: cwd,stdio,customFds,env,detached,uid,gid
default {cwd: undefine
         env: process.env
        }
stdio(pipe,ipc,ignore,Stream,null or undefined)
var spawn =require('child_process').spawn;
//父进程与子进程之间共享标准输入输出
spawn('prg',[],{stdio: ['pipe', 'pipe', process.stderr]});

 */

var cp=require('child_process');
var sp1=cp.spawn('node',['test1.js','one','two','three','four'],{cwd:'./test'});
var sp2=cp.spawn('node',['test2.js'],{stdio:'pipe'});
sp1.stdout.on('data',function(data){
  console.log('child process std :'+data);
  sp2.stdin.write(data);
});
sp1.on('exit',function(code,signal){
  console.log('child process is exit,code: '+code);
  process.exit();
});
