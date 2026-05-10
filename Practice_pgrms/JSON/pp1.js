//1. Convert JSON string into object.
let jsonData = '{"name":"A","age":20}';

let obj = JSON.parse(jsonData);
console.log(obj.name);