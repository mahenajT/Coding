const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  imageNum = 20;
  addNewImages();
});
function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainer.appendChild(newImage);
  }
}

// Button Effect
btn.addEventListener("mouseover", (event) => {
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;
  btn.style.setProperty("--xPosition", x + "px");
  btn.style.setProperty("--yPosition", y + "px");
});
