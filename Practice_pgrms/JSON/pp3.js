//3. Parse API-like JSON data and display values. 
let jsonData = '{"name":"Varshini","age":23,"city":"Hyderabad"}';
let obj = JSON.parse(jsonData);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);