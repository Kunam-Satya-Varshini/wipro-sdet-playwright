//1. Find the largest and smallest number in an array. 
let arr = [2,5,7,3,9];
let min = arr[0];
let max= arr[0];
      min = arr.reduce((a, b) => a < b ? a : b);
      max = arr.reduce((a, b) => a > b ? a : b);

console.log("Maximum and Minimum Values are:",max,min);