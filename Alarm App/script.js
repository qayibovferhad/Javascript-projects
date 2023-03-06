let timeRef = document.querySelector(".timer-display");
let hourInput = document.getElementById("hourInput");
let minuteInput = document.getElementById("minuteInput");
let activeAlarms = document.querySelector(".activeAlarms");
let setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio("alarm.mp3");

let initialHour = 0,
  initialMinute = 0,
  alarmIndex = 0;
let appendZero = (value) => (value > 10 ? value : "0" + value);
const searchObject = (parameter, value) => {
  let alarmObject,
    objIndex,
    exist = false;

  alarmsArray.forEach((alarm, index) => {
    if (alarm[parameter] == value) {
      exist = true;
      objIndex = index;
      alarmObject = alarm;
      return false;
    }
  });
  return [exist, alarmObject, objIndex];
};
const inputCheck = (inputvalue) => {
  inputvalue = parseInt(inputvalue);
  if (inputvalue < 10) {
    inputvalue = appendZero(inputvalue);
  }
  return inputvalue;
};

hourInput.addEventListener("input", () => {
  hourInput.value = inputCheck(hourInput.value);
});
minuteInput.addEventListener("input", () => {
  minuteInput.value = inputCheck(minuteInput.value);
});
function displayTimer() {
  let date = new Date();
  let [hours, minutes, seconds] = [
    appendZero(date.getHours()),
    appendZero(date.getMinutes()),
    appendZero(date.getSeconds()),
  ];
  timeRef.innerHTML = `${hours}:${minutes}:${seconds}`;
  alarmsArray.forEach((alarm, index) => {
    if (alarm.isActive) {
      if (`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmSound.loop = true;
      }
    }
  });
}
let createAlarm = (alarmObj) => {
  const { id, alarmHour, alarmMinute } = alarmObj;
  let alarmDiv = document.createElement("div");
  alarmDiv.classList.add("alarm");
  alarmDiv.setAttribute("data-id", id);
  alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}</span>`;

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      startAlarm(e);
    } else {
      stopAlarm(e);
    }
  });
  alarmDiv.appendChild(checkbox);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", (e) => deleteAlarm(e));
  alarmDiv.appendChild(deleteButton);
  activeAlarms.appendChild(alarmDiv);
};
setAlarm.addEventListener("click", () => {
  alarmIndex++;
  let alarmObj = {};
  alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
  alarmObj.alarmHour = hourInput.value;
  alarmObj.alarmMinute = minuteInput.value;
  alarmObj.isActive = false;
  //   console.log(alarmObj);
  alarmsArray.push(alarmObj);
  createAlarm(alarmObj);
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
});
const startAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exist, obj, index] = searchObject("id", searchId);
  if (exist) {
    alarmsArray[index].isActive = true;
  }
};
const stopAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    alarmsArray[index].isActive = false;
    alarmSound.pause();
  }
};
const deleteAlarm = (e) => {
  let searchId = e.target.parentElement.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    e.target.parentElement.parentElement.remove();
    alarmsArray.splice(index, 1);
  }
};
window.onload = () => {
  setInterval(displayTimer);
  initialHour = 0;
  initialMinute = 0;
  alarmIndex = 0;
  alarmsArray = [];
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
};
