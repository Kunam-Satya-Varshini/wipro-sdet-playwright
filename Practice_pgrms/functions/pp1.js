//1. Create a function that returns the greatest of three numbers.
function findGreatest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example
console.log(findGreatest(10, 25, 15)); // 25