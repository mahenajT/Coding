const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imageContainer = document.querySelector(".image-container");
let rotationAngle = 0;
let autoSlideTimer;

prevBtn.addEventListener("click", () => {
  rotationAngle = rotationAngle + 45;
  changeImagesSlide();
  clearTimeout(autoSlideTimer);
});
nextBtn.addEventListener("click", () => {
  rotationAngle = rotationAngle - 45;
  changeImagesSlide();
  clearTimeout(autoSlideTimer);
});
function changeImagesSlide() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
  autoSlideTimer = setTimeout(() => {
    rotationAngle = rotationAngle - 45;
    changeImagesSlide();
  }, 5000);
}

changeImagesSlide();
