const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const OffsetX = event.offsetX;
  const OffsetY = event.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.top = `${OffsetY}px`;
  spanElement.style.left = `${OffsetX}px`;

  const size = Math.floor(10 + Math.random() * 70);
  spanElement.style.width = `${size}px`;
  spanElement.style.height = `${size}px`;

  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
