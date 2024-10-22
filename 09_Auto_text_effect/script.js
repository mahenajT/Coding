const containerElement = document.querySelector(".container");
const careers = ["Learner", "Web Developer", "Instructor", "Freelancer"];
// containerElement.innerHTML = `<h1>I am a ${careers[0]}</h1>`;

let careerIndex = 0;
let characterIndex = 0;
function updateText() {
  characterIndex++;
  containerElement.innerHTML = 
  `<h1>I am 
    ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} 
    ${careers[careerIndex].slice(0, characterIndex)}
  </h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}

updateText();
