//5. Create a calculator using functions for add, subtract, multiply, and divide.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Examples
console.log(add(5, 3));        
console.log(subtract(5, 3));  
console.log(multiply(5, 3));   
console.log(divide(5, 3));     