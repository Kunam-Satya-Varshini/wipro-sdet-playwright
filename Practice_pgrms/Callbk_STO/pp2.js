//2. Build a countdown timer. 
let intial = 5 ;
function timer(){
    console.log(intial);
    intial  -- ;
    if(intial > 0){
        setTimeout(timer , 2000);
}  else{
        console.log("Time Up !!!"); }
    }
  timer();  
