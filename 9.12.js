process.stdin.resume();
process.on('SIGINT',function(){
  console.log('received SIGINT signal')
});
