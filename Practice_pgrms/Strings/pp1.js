//1. Reverse a string without using built-in reverse methods.
let string = "Varshini";
console.log(string);
let rev = "";
for(let i = string.length - 1 ; i>=0 ;i--){
    rev = rev + string[i] ;
}
console.log("Reversed string :",rev);