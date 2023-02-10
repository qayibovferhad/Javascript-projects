const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#inp-word");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.getElementById("sound");
searchBtn.addEventListener("click", function () {
  fetchWord();
});

function fetchWord() {
  const word = searchInput.value;
  fetch(`${url}${word}`)
    .then((response) => response.json())
    .then((data) => showResult(data, word));
  searchInput.value = "";
}
function showResult(data, word) {
  result.innerHTML = `
  <div class="word">
  <h3>${word}</h3>
  <button onclick="playSound()">
      <i class="fas fa-volume-up"></i>
  </button>
</div>
<div class="details">
  <p>${data[0].meanings[0].partOfSpeech}</p>
  <p>/${data[0].phonetic}/</p>
</div>
<p class="word-meaning">
 ${data[0].meanings[0].definitions[0].definition}
</p>
<p class="word-example">
  ${data[0].meanings[0].definitions[0].example || ""}
</p>
  `;
}
