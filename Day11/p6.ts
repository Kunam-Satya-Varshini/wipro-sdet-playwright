// 6. Conditional Types & the infer Keyword 
// ● Scenario: You are working with a library that returns data wrapped in a Promise, and 
// you need to extract the underlying type. 
// ● Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, 
// use the infer keyword to return the type the promise resolves to; otherwise, return T 
// itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Tests
type A = UnwrapPromise<Promise<string>>; // string
type B = UnwrapPromise<Promise<number>>; // number
type C = UnwrapPromise<boolean>;         // boolean
type D = UnwrapPromise<Promise<{ id: number }>>; // { id: number }