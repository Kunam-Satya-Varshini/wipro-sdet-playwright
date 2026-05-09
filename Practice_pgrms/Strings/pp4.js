//4 Capitalize the first letter of every word in a sentence
let str = "this is a string program";
console.log("The original String :", str);
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i][0].toUpperCase();
    arr[i] = firstLetter + arr[i].slice(1);
}
let result = arr.join(" ");
console.log("The final String :", result);