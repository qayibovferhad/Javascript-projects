let buttonRef = document.querySelectorAll(".button-option");
let restartBtn = document.getElementById("restart");
let newgameBtn = document.getElementById("new-game");
let popup = document.querySelector(".popup");
let message = document.querySelector("#message");
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [2, 4, 6],
  [1, 4, 7],
  [0, 4, 8],
];
const disableButtons = () => {
  buttonRef.forEach((element) => {
    element.disabled = true;
  });
  popup.classList.remove("hide");
};
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    message.innerHTML = "&#x1F389; <br> X Wins";
  } else {
    message.innerHTML = "&#x1F389; <br> O Wins";
  }
};
const enableButtons = () => {
  buttonRef.forEach((element) => {
    element.disabled = false;
    element.innerText = "";
  });
  popup.classList.add("hide");
};

const drawFunction = () => {
  disableButtons();
  message.innerHTML = "&#x1F60E; <br> It's a Draw";
};
newgameBtn.addEventListener("click", function () {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", function () {
  count = 0;
  enableButtons();
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      buttonRef[i[0]].innerText,
      buttonRef[i[1]].innerText,
      buttonRef[i[2]].innerText,
    ];
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 === element3) {
        winFunction(element1);
      }
    }
  }
};
let xTurn = true;
let count = 0;
buttonRef.forEach((element) => {
  element.addEventListener("click", function () {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count++;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});
window.onload = enableButtons;
