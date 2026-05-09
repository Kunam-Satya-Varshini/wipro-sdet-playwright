//4. Find Fibonacci series up to n numbers
let n =15;
let a = 0;
let b = 1;
console.log("Fibonacci series:");

for (let i = 1; i <= n; i++) {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;}