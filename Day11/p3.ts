//3. Exhaustiveness Checking (The never Type)
//Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

 type TaskStatus = 'Open' | 'InProgress' | 'Closed';
 function handleTask(status: TaskStatus) : string {
    switch(status){
        case : 'open'
        return "Task is Open";
        case 'InProgress':
      return "Task is in progress";

    case 'Closed':
      return "Task is closed";

    case 'Archived':
      return "Task is archived";

    default:
      const _exhaustiveCheck: never = status;
      return _exhaustiveCheck;
  }
}


    }
 }