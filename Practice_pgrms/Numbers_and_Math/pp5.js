//5. Check whether a number is Armstrong number.

let num = 234;
let original = num;
let sum = 0;
while (num > 0) {
    let r = num % 10;      
    sum = sum + (r * r * r);

    num = Math.floor(num / 10); 
}
if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}