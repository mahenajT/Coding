/*
 * Detect the movement of the mouse inside the browser
 * Get the position of the mouse X and Y
 * Create the heart in different size and different colors when we are are moving the mouse in the different area of the browser
 */

const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (event) => {
  const XOffset = event.offsetX;
  const YOffset = event.offsetY;
  const span = document.createElement("span");
  span.style.left = `${XOffset}px`;
  span.style.top = `${YOffset}px`;

  // Change the Size of the heart
  const size = Math.floor(10 + Math.random() * 100);
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;

  // each time the mouse moves here create a new span element
  bodyElement.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
