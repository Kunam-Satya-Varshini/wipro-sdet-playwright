// 10. Mapped Types with Key Remapping 
// ● Scenario: You have a data model and need to generate a type for an API response that 
// "prefixes" all the keys. 
// ● Task: 
// 1. Define an interface Car { make: string; model: string; }. 
// 2. Create a mapped type ApiResponse<T> that iterates through keys of T and 
// renames them to be uppercase and prefixed with DATA_ (e.g., make becomes 
// DATA_MAKE).

interface Car {
    make: string;
    model: string;
}

type ApiResponse<T> = {
    [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

// Example usage
type CarApiResponse = ApiResponse<Car>;

/*
Result:
type CarApiResponse = {
    DATA_MAKE: string;
    DATA_MODEL: string;
}
*/