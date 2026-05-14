//4. Simulate stack overflow with recursion
function hi (){
    console.log("loading.....");
    hi();
}
hi();
