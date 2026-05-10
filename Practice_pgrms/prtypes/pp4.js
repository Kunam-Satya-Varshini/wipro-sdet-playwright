//4. Compare arrays using reference equality. 
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
console.log(arr1 === arr2); 