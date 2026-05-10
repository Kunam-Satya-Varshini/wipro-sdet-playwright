//5. Demonstrate shallow copy using spread operator.
const obj = {
    name : "varshini",
    age : 23,
    loc : {state:"TS"}
}
obj2 = {...obj}
obj2.age=24;
obj2.loc.state = "AP";
console.log(obj.age);
console.log(obj2.age);
console.log(obj.loc.state);
console.log(obj2.loc.state);