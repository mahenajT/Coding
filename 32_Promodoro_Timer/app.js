const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 1500; // 25 minutes
function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert("Time is up!");
      clearInterval(interval);
      timeLeft === 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timer.innerHTML = formattedTime;
}
// Method in JavaScript - > PadStart

/** This code gives me practice with:
 
 * DOM manipulation and event handling.
 * Working with setInterval and clearInterval.
 * JavaScript conditionals and assignment vs. comparison.
 * String formatting with padStart.
 * Structuring code in functions and managing UI state.
 
 */