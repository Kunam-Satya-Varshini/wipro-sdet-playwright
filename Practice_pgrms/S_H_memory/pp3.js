//3. Demonstrate object mutation through references.
let obj1 = {
    name: "Varshini",
    age: 23
};
let obj2 = obj1;
obj2.age = 30;
obj2.name = "Satya";
console.log("obj1:", obj1);
console.log("obj2:", obj2);