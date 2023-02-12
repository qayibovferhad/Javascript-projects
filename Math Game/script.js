const operators = ["+", "-", "*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
const container = document.querySelector(".container");
let answerValue;
let operatorQuestion;
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const questionGenerator = () => {
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  let solution = eval(`${num1}${randomOperator}${num2}`);
  let randomvar = randomValue(1, 5);
  if (randomvar == 1) {
    answerValue = num1;
    question.innerHTML = ` <input type="text" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`;
  } else if (randomvar == 2) {
    answerValue = randomOperator;
    operatorQuestion = true;
    question.innerHTML = ` ${num1}  <input type="text" id="inputValue" placeholder="?"\> ${num2} = ${solution}`;
  } else if (randomValue == 3) {
    answerValue = num2;
    question.innerHTML = ` ${num1} ${randomOperator}  <input type="text" id="inputValue" placeholder="?"\> = ${solution}`;
  } else {
    answerValue = solution;
    question.innerHTML = ` ${num1} ${randomOperator} ${num2}  = <input type="text" id="inputValue" placeholder="?"\>`;
  }
};
submitBtn.addEventListener("click", function () {
  let userInput = document.getElementById("inputValue").value;
  if (userInput) {
    if (userInput == answerValue) {
      stopGame("It is correct");
    } else if (operatorQuestion && !operators.includes(userInput)) {
      errorMessage.classList.remove("hide");
      errorMessage.innerHTML = "Please enter a valid operator";
    } else {
      stopGame(`It is <span>Wrong</span> Answer`);
    }
  } else {
    errorMessage.classList.remove("hide");
    errorMessage.innerHTML = "Input Cannot Be Empty";
  }
});
startBtn.addEventListener("click", function () {
  operatorQuestion = false;
  answerValue = "";
  errorMessage.innerHTML = "";
  errorMessage.classList.add("hide");
  controls.classList.add("hide");
  startBtn.classList.add("hide");
  questionGenerator();
});
const stopGame = (resultText) => {
  result.innerHTML = resultText;
  startBtn.innerHTML = "Restart";
  startBtn.classList.remove("hide");
  controls.classList.remove("hide");
};
