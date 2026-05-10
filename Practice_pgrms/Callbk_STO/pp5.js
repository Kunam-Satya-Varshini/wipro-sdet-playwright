//5. Execute functions sequentially using callbacks.
function shop (order){
    console.log("What is the cost of these mangoes ?");
    order(packing);
}
function order(packing){
    console.log("It's Rs.120 per Kg.");
    console.log("How many kgs do u want ??");
    packing(bye);
}
function packing(bye){
    console.log("Ok, please pack 2 kgs");
    bye();
}
function bye(){
    console.log("Here is your order");
    console.log("Thank you , Visit Again!!!");
}

shop(order);