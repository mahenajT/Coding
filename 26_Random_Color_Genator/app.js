/*
 * Generate the .color-container boxes using for Loop
 * Add .color-container css in them
 * Append color-container boxes in .container
 */

const container = document.querySelector(".container");
// Generate 32 .color-container div-s and append them to the container
for (let index = 0; index < 32; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  container.appendChild(colorContainer);
}

function randomColor() {
  const characters = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const random = Math.floor(Math.random() * characters.length);
    color = color + characters.substring(random, random + 1);
  }
  return color; // Return the full hex color code
}
// Select all created .color-container div s
const colorContainers = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  // Iterate over each .color-container and apply random colors
  colorContainers.forEach((colorContainer) => {
    const newColorCode = randomColor();
    colorContainer.style.backgroundColor = "#" + newColorCode;
    colorContainer.innerHTML = "#" + newColorCode;
  });
}
