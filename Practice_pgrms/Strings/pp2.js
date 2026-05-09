//2. Count the number of vowels in a string
const string = "Varshini";
str = string.toLowerCase();
console.log("The string is:",str);
let count = 0;

for(let i = 0 ; i<str.length;i++){
    let c = str.charAt(i);
    if(c=="a"|| c=="e"||c=="o"||c=="i"||c=="u"){
        count ++;
    }
   }
 console.log("No.of vowels in this string:",count);