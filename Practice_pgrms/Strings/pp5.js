//5. Find the longest word in a sentence. 
let str = "This Is A Long Sentence";

let longest = str
    .split(" ")
    .reduce((a, b) => a.length > b.length ? a : b);

console.log(longest);