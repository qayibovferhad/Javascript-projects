const container = document.querySelector(".container");
const addQuestion = document.getElementById("add-flashcard");
const cardButton = document.getElementById("save-btn");
const errorMessage = document.getElementById("error");
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const addQuestionCard = document.getElementById("add-question-card");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

addQuestion.addEventListener("click", function () {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});
closeBtn.addEventListener(
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
    if (editBool) {
      editBool = false;
      submitQuestion();
    }
  })
);

cardButton.addEventListener(
  "click",
  (submitQuestion = () => {
    editBool = false;
    tempQuestion = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempAnswer || !tempQuestion) {
      errorMessage.classList.remove("hide");
    } else {
      errorMessage.classList.add("hide");
      container.classList.remove("hide");
      viewlist();
      question.value = "";
      answer.value = "";
    }
  })
);

function viewlist() {
  var listCard = document.getElementsByClassName("card-list-container");
  var div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `<p class ="question-div">${question.value}</p>`;
  var displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;

  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });
  div.appendChild(link);
  div.appendChild(displayAnswer);
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });
  buttonsCon.appendChild(editButton);
  disableButtons(false);

  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonsCon.appendChild(deleteButton);
  div.appendChild(buttonsCon);

  listCard[0].appendChild(div);
  hideQuestion();
}

function modifyElement(element, edit = false) {
  let parentDiv = element.parentElement.parentElement;
  let parentQuestion = parentDiv.querySelector(".question-div").innerText;
  if (edit) {
    let parentAns = parentDiv.querySelector(".answer-div").innerText;
    answer.value = parentAns;
    question.value = parentQuestion;
    disableButtons(true);
  }
  parentDiv.remove();
}

const disableButtons = (value) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = value;
  });
};
