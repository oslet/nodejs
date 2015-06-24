process.stdout.write("child process current dir :"+process.cwd());
process.argv.forEach(function(val,index,array){
  process.stdout.write("\r\n"+index + ': ' + val);
});
