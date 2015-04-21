//console.log("This is test string.");

var user=new Object();
 user.name="Lulingniu";
user.getName=function(){return this.name;};
user.setName=function(name){this.name=name;};
//console.dir(user);
console.trace('trace');

console.time('small loop');
for (var i=0; i<10000000;i++){
;
}
console.timeEnd('small loop')

if(module === require.main(){
console.log('This is the main module of application.');
}
