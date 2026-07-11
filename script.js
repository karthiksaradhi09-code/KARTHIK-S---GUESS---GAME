let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (guess < 1 || guess > 10) {
        result.innerHTML = "❗ Enter a number between 1 and 10.";
    } else if (guess === secretNumber) {
        result.innerHTML = "🎉 Congratulations! You guessed it!";
        secretNumber = Math.floor(Math.random() * 10) + 1;
    } else if (guess > secretNumber) {
        result.innerHTML = "📉 Too high! Try again.";
    } else {
        result.innerHTML = "📈 Too low! Try again.";
    }
}