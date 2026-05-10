//3. Clone an object without affecting original object. 
let obj = {
    name:"varshni",
    age :23
}
obj2={...obj}
obj2.age = 30;
console.log(obj.age);
console.log(obj2.age);