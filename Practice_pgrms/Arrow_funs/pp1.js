//1. Convert normal functions into arrow functions. 
//normal fun
function findSquare(num) {
    return num * num;
}

console.log(findSquare(5));

//arrow fun
const square = n => {
    return n * n ;
};
console.log(square(5));