let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");
let guessInput = document.getElementById("guess");
let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];
console.log(answer);
function play() {
  guessValue = Number(guessInput.value);

  if (guessValue < 0 || guessValue > 100) {
    alert("Please choose 1 between 100");
  } else {
    guessed_nums.push(guessValue);
    no_of_guesses++;
    if (guessValue < answer) {
      message1.textContent = "Your guess is too low";
      message2.textContent = "No of guesses " + no_of_guesses;
      message3.textContent = "Guesses number are " + guessed_nums;
    } else if (guessValue > answer) {
      message1.textContent = "Your guess is too high";
      message2.textContent = "No of guesses " + no_of_guesses;
      message3.textContent = "Guesses number are " + guessed_nums;
    } else if (guessValue === answer) {
      message1.textContent = "You are right";
      message2.textContent = "The number was " + answer;
      message3.textContent = "You guessed it in " + no_of_guesses + " guesses";
    }
  }
}
