const searchBar = document.querySelector(".search-bar-container");
const search = document.querySelector(".search");

search.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});
