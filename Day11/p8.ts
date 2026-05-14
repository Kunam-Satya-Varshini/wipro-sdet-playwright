// 8. Async Higher-Order Function (HOF) 
// ● Scenario: You want to wrap any asynchronous function with a standard error logger. 
// ● Task: Write a generic function safeExecute<T> that takes an async function as an 
// argument. It should return a new function that, when called, executes the original 
// function inside a try/catch block and returns null if it fails. 

function safeExecute<Args extends any[], T>(
    asyncFn: (...args: Args) => Promise<T>
) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFn(...args);
        } catch (error) {
            console.error(error);
            return null;
        }
    };
}

// Example usage
const fetchUser = async (id: number): Promise<string> => {
    if (id === 0) throw new Error("Invalid ID");
    return `User ${id}`;
};

const safeFetchUser = safeExecute(fetchUser);

(async () => {
    console.log(await safeFetchUser(1)); // "User 1"
    console.log(await safeFetchUser(0)); // null
})();