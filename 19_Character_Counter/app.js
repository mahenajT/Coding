const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () => {
  // console.log("Key is Pressed");
  updateCounter();
});
function updateCounter() {
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText =
    textarea.getAttribute("maxlength") - textarea.value.length;
}

/**
 * Track the text which is being written inside the text area
 * Count the characters of that text and put that in the "Total Character"
 * We get the information from the max length of the textarea
 * maxLength - total character
 */
