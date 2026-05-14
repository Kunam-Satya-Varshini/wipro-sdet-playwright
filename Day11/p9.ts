// 9. Index Signatures for Dynamic Metadata 
// ● Scenario: You are receiving a "Metadata" object from a server where the keys are 
// dynamic strings, but the values must be either a string, number, or boolean. 
// ● Task: Create an interface UserMetadata that has a required createdAt: Date but allows 
// any other dynamic string keys as long as their values match the union type mentioned. 

interface UserMetadata {
    createdAt: Date;
    [key: string]: string | number | boolean | Date;
}

// Example usage
const userMeta: UserMetadata = {
    createdAt: new Date(),
    name: "Varshini",
    age: 21,
    isActive: true
};