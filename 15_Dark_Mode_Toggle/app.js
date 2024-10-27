const checkInput = document.querySelector(".input");
const body = document.querySelector("body");

// Get the saved mode from localStorage and set the checkbox state
checkInput.checked = JSON.parse(localStorage.getItem("mode"));
updateBackground()

 
function updateBackground() {
  if (checkInput.checked) {
    // True
    body.style.backgroundColor = "#222222";
  } else {
    // False
    body.style.backgroundColor = "white";
  }
}
checkInput.addEventListener("click", () => {
  updateBackground();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(checkInput.checked));
}
