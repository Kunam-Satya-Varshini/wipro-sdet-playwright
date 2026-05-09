//1. Create an object for a student and display all properties dynamically.
let student = {
    name : "varshini", 
    roll : 10,
    age : 23 ,
    gender : "F"
}
console.log("Student data :",student);
for(let v in student){
    console.log(v,":",student[v]);
}
