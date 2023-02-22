const url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector("#btn");
fetchQuote();
function fetchQuote() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => getQuote(data));
}
function getQuote(data) {
  quote.textContent = data.content;
  author.textContent = data.author;
}
window.addEventListener("load", fetchQuote);
button.addEventListener("click", fetchQuote);
