//3. Merge two objects into one. 
const apple ={
    colour : "red",
    price : 20
}
const mango = {
    season : "summer"
}
const merge = {
      ...apple,...mango
};
console.log(merge);