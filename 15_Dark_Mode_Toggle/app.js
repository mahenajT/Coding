const checkInput = document.querySelector(".input");
const body = document.querySelector("body");

function updateBackground() {
  if (checkInput.checked) {
    // True
    body.style.backgroundColor = "#222222";
  } else {
    // False
    body.style.backgroundColor = "white";
  }
}
checkInput.addEventListener("click", ()=>{
    updateBackground()
});
