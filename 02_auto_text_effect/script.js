const textElement1 = document.getElementById("text");
const speedElement1 = document.getElementById("speed");
const text = "I love Coding..😊";

let initialSpeedIndex = 1;
let speed = 300 / speedElement1.value;

writeText();
function writeText() {
  textElement1.innerText = text.slice(0, initialSpeedIndex);
  initialSpeedIndex++;

  if (initialSpeedIndex > text.length) {
    initialSpeedIndex = 1;
  }
  setTimeout(writeText, speed);
}
speedElement1.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
