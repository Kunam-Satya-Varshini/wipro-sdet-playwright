//4. Find second largest number in an array. 
let arr = [1, 4, 2, 6, 8, 5];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;   
        first = arr[i];   
    } 
    else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
    }
}

console.log("second highest element:", second);