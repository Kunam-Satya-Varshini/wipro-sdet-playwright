//5. Create a number guessing game using loops.
let secret = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== secret) {
    guess = Number(prompt("Guess a number (1-10):"));

    if (guess > secret) {
        console.log("Too high!");
    } else if (guess < secret) {
        console.log("Too low!");
    } else {
        console.log("Correct! 🎉");
    }
}