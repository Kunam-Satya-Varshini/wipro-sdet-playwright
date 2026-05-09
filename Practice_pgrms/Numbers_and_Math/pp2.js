//2. Check whether a number is prime. 
let num = 45;
let count =0;
for(let i = 1;i<=num;i++){
    if(num % i == 0){
        count ++ ;
    }
}
    if(count == 2){
        console.log("This is a Prime Number !!!");
    }
    else {
    console.log("This is NOT a Prime Number !!!");
}

