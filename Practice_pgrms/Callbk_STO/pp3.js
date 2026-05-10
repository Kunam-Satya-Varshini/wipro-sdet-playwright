//3. Create a callback-based calculator.
function calculator(array,operation,intial_value){
    const  result = array.reduce(operation,intial_value)
        console.log("Result is ",result);
    
}
const add = (acc, curr) => acc + curr;
const subtract = (acc, curr) => acc - curr;
const multiply = (acc, curr) => acc * curr;
const divide = (acc, curr) => acc / curr;
calculator([1, 2, 3, 4], add, 0);