var process=require('child_process');
process.on('message',function(m){
	console.log('child process received message :',m);
	proccess.send({age:40});
});
