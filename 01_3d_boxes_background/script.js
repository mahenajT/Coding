let boxesContainer = document.getElementById("boxes");
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

function createBoxes() {
  for (let item = 0; item < 4; item++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-item * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
