const data = [ // Data
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];
//Elements
const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let total = 0;
let selectedAnswer;

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult()
    selectedAnswer = null;
  question.textContent = data[qNumber].question
  answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
    `  <div class="answer">
    <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
    <label for="1">${item.answer}</label>
  </div>`
  ).join('')
  selectAnswer();
}
const selectAnswer = () =>{
    answersContainer.querySelectorAll("input").forEach((el) =>{
        el.addEventListener("click",(e)=>{
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () =>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer !== null){
            selectedAnswer === "true" ? correctAnswer++ : wrongAnswer++;
            qIndex++
            showQuestion(qIndex)
            
        }
        else alert("Please select answer")
    })
    
}
const showResult = () =>{
    gameScreen.style.display = "none"
    resultScreen.style.display = "block"
    resultScreen.querySelector(
        ".correct"
        ).textContent = `Correct Answers: ${correctAnswer}`;
        
      resultScreen.querySelector(
        ".wrong"
      ).textContent = `Wrong Answers: ${wrongAnswer}`;
    
      resultScreen.querySelector(".score").textContent = `Score: ${
        (correctAnswer - wrongAnswer) * 10
      }`;
}

const playAgain = () =>{
    qIndex = 0
    correctAnswer = 0
    wrongAnswer = 0
    total = 0
    showQuestion(qIndex)
}
play.addEventListener("click",()=>{
    gameScreen.style.display = "block"
    resultScreen.style.display = "none"
    playAgain()
})

showQuestion(qIndex)
submitAnswer()
