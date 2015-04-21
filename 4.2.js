var foo=require('./foo.js');
var myFoo = new foo("Tom","40");
console.log("获取修改前的私有变量值");
console.log(myFoo.GetName());
console.log(myFoo.GetAge());
console.log("修改私有变量值");
myFoo.SetName("Bob")
myFoo.SetAge(30)
console.log("获取修改后的私有变量值");
console.log(myFoo.GetName());
console.log(myFoo.GetAge());
console.log("获取修改前的公有变量值");
console.log(myFoo.GetName);
console.log(myFoo.GetAge);
console.log("修改公有变量值");
myFoo.name="Bob"
myFoo.age=30

console.log("获取修改后的公有变量值");
console.log(myFoo.name);
console.log(myFoo.age);

console.log("获取类变量值");
foo.staticName='Static Name';
foo.staticFunction();
