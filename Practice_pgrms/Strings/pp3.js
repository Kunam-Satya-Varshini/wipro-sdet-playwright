//3. Check whether a string is a palindrome
let str = "Madam";
let s = str.toLowerCase();
let r ="";
for(let i = s.length - 1; i>=0;i--){
    r = r + s.charAt(i);
}
if(s === r){
    console.log("String is a Palindrome!!!");
}
else
    console.log("String is not a Palindrome!!!");