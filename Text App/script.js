const myTextBox = document.getElementById("my-text-box");
let result = document.getElementById("result");

const isEmpty = () => {
  if (myTextBox.value.length != 0) {
    return true;
  } else {
    return false;
  }
};
const reverseStr = () => {
  if (isEmpty()) {
    let myText = myTextBox.value;
    result.innerHTML = `The reversed text is:<span>${myText
      .split("")
      .reverse()
      .join("")}</span>`;
  } else {
    result.innerHTML = "Please Enter Some Text";
  }
};

const isPalindrome = () => {
  let myText = myTextBox.value;
  if (myText) {
    if (myText == myText.split("").reverse().join("")) {
      result.innerHTML = "A Palindrome";
    } else {
      result.innerHTML = "Not A Palindrome";
    }
  } else {
    result.innerHTML = "Please Enter Some Text";
  }
};

const wordCount = () => {
  if (isEmpty()) {
    let myText = myTextBox.value;

    let wordCounter = myText.trim().split(/\s+/).length;
    result.innerHTML = `The word count is: ${wordCounter}`;
  }
};

const charCount = () => {
  if (isEmpty()) {
    let myText = myTextBox.value;
    result.innerHTML = `The character count is : <span>${myText.length}</span>`;
  }
};

const search = () => {
  let myText = myTextBox.value;
  let searchText = document.getElementById("search-text").value.trim();

  if (isEmpty() && searchText.length != 0) {
    if (myText.includes(searchText)) {
      result.innerHTML = `The text contains <span>${searchText}</span> `;
    } else {
      result.innerHTML = `The text does NOT contains <span>'${searchText}'</span>`;
    }
  } else {
    result.innerHTML = "Please Enter Some Text";
  }
  document.getElementById("search-text").value = "";
};
