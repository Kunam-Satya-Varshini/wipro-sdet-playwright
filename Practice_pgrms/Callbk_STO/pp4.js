//4. Simulate food ordering system using callbacks
function order (preparation){
    console.log("Hello,your order is recieved.");
    preparation(ready);
}
function preparation(ready){
    console.log("Order is being prepared.....");
 setTimeout(()=>{
    ready(delivery);},2000);
 }
function ready(delivery){
    console.log("Food is ready!!!");
    setTimeout(()=>{delivery();},2000);}
function delivery(){
    console.log("Food is delivered");
}
order(preparation);

