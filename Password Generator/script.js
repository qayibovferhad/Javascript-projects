const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let output = document.getElementById("output");
function randomChar(value) {
  return Math.floor(Math.random() * value);
}
function genPassword() {
  let length = document.getElementById("length").value;
  document.getElementById("length-val").textContent = length;

  let str = "";
  for (let i = 0; i < length; i++) {
    let random = randomChar(characters.length);
    str += characters.charAt(random);
  }
  output.value = str;
}
genPassword();

function copyClipboard() {
  output.select();
  document.execCommand("copy");
}
