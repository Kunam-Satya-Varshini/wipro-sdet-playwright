//2. Create examples showing object reference behavior.
let obj = {
    name:"varshni",
    age :23
}
let obj2 = obj;
obj2.age = 20;
console.log(obj.age);
console.log(obj2.age);