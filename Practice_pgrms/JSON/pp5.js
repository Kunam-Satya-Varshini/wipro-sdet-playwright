//5. Filter JSON data based on conditions. 
const jsonData = "[1,2,3,4,5,6]";
const arr = JSON.parse(jsonData);
const result = arr.filter((n) => n % 2 === 0);
console.log(result);
