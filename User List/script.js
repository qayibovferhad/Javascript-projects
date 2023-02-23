const userForm = document.getElementById("user-form");
const userList = document.getElementById("user-list");
let searchBtn = document.getElementById("searchBtn");
let count = document.getElementById("count");
let users = [];
userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const { username, type } = userForm.elements;
  users.push({
    username: username.value,
    type: type.value,
  });
  username.value = "";
  displayList(users);
  uptadeCount(users);
});

userList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const index = Number(e.target.parentElement.id);
    users.splice(index, 1);
    displayList(users);
    uptadeCount(users);
  }
});

function displayList(user) {
  let userHTML = "";
  let index = 0;
  for (let user of users) {
    userHTML += `
    <li id=${index} class="list-group-item d-flex justify-content-between align-items-start userForms">
    <input type="checkbox" />
    <div class="ms-2 me-auto">
      <div class="userNames">${user.username}</div>
      <span class="badge bg-primary rounded-pill">${user.type}</span>
    </div>
    <button type="button" class="btn btn-danger btn-sm">
      Delete
    </button>
  </li>`;
    index++;
  }

  userList.innerHTML = userHTML;
}

function uptadeCount(users) {
  count.textContent = users.length;
}

searchBtn.addEventListener("click", function () {
  let text = document.getElementById("searchInput").value;
  let user = document.querySelectorAll(".userNames");
  let userForms = document.querySelectorAll(".userForms");
  user.forEach(function (element, index) {
    if (element.innerText.includes(text)) {
      userForms[index].classList.remove("hide");
    } else {
      userForms[index].classList.add("hide");
    }
  });
});
