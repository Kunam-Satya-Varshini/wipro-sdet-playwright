//2. Create examples showing heap memory references. 
let obj1 = { name: "Satya" };
let obj2 = obj1;

obj2.name = "Varshini";
console.log(obj1);
console.log(obj2);
