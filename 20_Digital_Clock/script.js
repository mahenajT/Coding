const container = document.querySelector(".container");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const time = document.getElementById("time");

function updateClock() {
  let timeZone = "AM";
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  if (hour > 12) {
    hour = hour - 12;
    timeZone = "PM";
  }
  if (timeZone === "PM") {
    container.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(working_Hour.jpg)";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  hoursElement.innerText = hour;
  minutesElement.innerText = minute;
  secondsElement.innerText = second;
  time.innerText = timeZone;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
