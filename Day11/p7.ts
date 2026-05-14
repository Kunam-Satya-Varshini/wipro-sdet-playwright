// 7. The Union Manipulation Puzzle 
// ● Scenario: You have a massive union of possible events but need to categorize them for 
// specific handlers. 
// ● Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'. 
// 1. Use Extract to create MouseEvents (only click and dbclick). 
// 2. Use Exclude to create NonFormEvents (everything except submit and reset).

type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

// 1. MouseEvents (only click and dbclick)
type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;

// 2. NonFormEvents (everything except submit and reset)
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;