//4. Predict outputs of memory-related programs. 
//(Primitive → Stack)
let a = 5;
let b = a;
b = 10;
console.log(a);
console.log(b);

//(Object → Heap reference)
let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 50;
console.log(obj1.x);
console.log(obj2.x);