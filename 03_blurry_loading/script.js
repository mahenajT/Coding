// Select elements from the DOM
const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

// Initialize the loading counter
let initialLoad = 0;

// Set up an interval to the blurring() function every 30 milliseconds
let interval = setInterval(blurring, 30);

// Function that handles the blurring effect and text update
function blurring() {
  initialLoad++; // Increment the loading value by 1 each time the function is called

  // In the loading value exceeds 99, clear the interval to stop the function from running
  if (initialLoad > 99) {
    clearInterval(interval);
  }

  // Update the text content to display the current loading parentage
  loadText.innerText = `${initialLoad}%`;

  // Adjust the opacity of the loading text as the loading value increases (from 1 to 0)
  loadText.style.opacity = scale(initialLoad, 0, 100, 1, 0);

  // Apply a blur filter to the background element, reducing the blur effect from 30px to 0px as it loads
  background.style.filter = `blur(${scale(initialLoad, 0, 100, 30, 0)}px)`;
}

// Function to map a number from one range to another range
// For example, it converts a number from a range of 0-100 to another range like like 1 - 0 or 300 - 0
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
