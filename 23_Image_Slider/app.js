let next = document.querySelector(".next");
let preview = document.querySelector(".prev");

next.addEventListener("click", () => {
  let imageItems = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(imageItems[0]);
});
preview.addEventListener("click", () => {
  let imageItems = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(imageItems[imageItems.length - 1]);
});
