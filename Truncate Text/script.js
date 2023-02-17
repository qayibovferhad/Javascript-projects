let inputText = document.getElementById("input-text");
let outputText = document.getElementById("output-text");
let truncate = document.getElementById("truncate");
let copy = document.getElementById("copy");

truncate.addEventListener("click", function () {
  let len = parseInt(document.getElementById("len").value);
  if (len) {
    if (len > 0 && len < inputText.value.length) {
      outputText.innerHTML = inputText.value.slice(0, len);
    } else {
      outputText.innerHTML = inputText.value;
    }
  } else {
    outputText = "";
    alert("Please fill the length input");
  }
});

copy.addEventListener("click", function () {
  //   inputText.select();
  //   document.execCommand("copy");
  navigator.clipboard.writeText(`${inputText.value}`);
});
