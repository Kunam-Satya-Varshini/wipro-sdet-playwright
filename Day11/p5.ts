// 5. Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.


type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

const margin1: MarginValue = "10px";
const margin2: MarginValue = "2.5rem";
const margin3: MarginValue = "15vh";

// const margin6: MarginValue = "px10";         
// const margin7: MarginValue = "ten px";       
console.log(margin1);  //10px
console.log(margin2);  //2.5rem
console.log(margin3);  //15vh