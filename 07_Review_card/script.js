// Card

const btn = document.querySelectorAll(".btn");
const slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

// Effect
const column_1 = document.getElementById("column-1");
column_1.addEventListener("mousemove", (event) => {
  const PositionX = event.offsetX;
  const PositionY = event.offsetY;
  const spanElement = document.createElement("span");
  spanElement.classList.add("span");
  const size = Math.floor(10 + Math.random() * 50);
  spanElement.style.width = `${size}px`;
  spanElement.style.height = `${size}px`;
  spanElement.style.top = PositionY + "px";
  spanElement.style.left = PositionX + "px";

  column_1.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
