const button = document.querySelector(".btn");

button.addEventListener("mouseover", (event) => {
  const x = event.pageX - button.offsetLeft;
  const y = event.pageY - button.offsetTop;
  button.style.setProperty("--xPosition", x + "px");
  button.style.setProperty("--yPosition", y + "px");
});
