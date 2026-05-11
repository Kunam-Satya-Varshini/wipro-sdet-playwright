//1. Trace execution order of nested function calls.
function first(){
    console.log("first started");
    second();
    console.log("first function ended");
}
function second(){
    console.log("second started");
    third();
    console.log("second function ended");
}
function third(){
console.log("third started");
console.log("third function ended");
}
first();