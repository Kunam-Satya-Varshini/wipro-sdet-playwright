// 5. Create a student grade calculator using arrow functions. 
const getGrade = (marks) =>{
    if (marks >=90){
        return"A";}
         else if (marks >= 75) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "Fail";
  }
};
console.log(getGrade(85)); 
console.log(getGrade(92)); 
console.log(getGrade(35));
   
