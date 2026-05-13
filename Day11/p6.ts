type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type A = UnwrapPromise<Promise<string>>; 
type B = UnwrapPromise<Promise<number>>; 
type C = UnwrapPromise<string>;          
type D = UnwrapPromise<Promise<Promise<number>>>; 