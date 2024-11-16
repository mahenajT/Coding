const button = document.querySelector(".btn");
const closeButton = document.querySelector(".close-btn");
const videoTrailerContainer = document.querySelector(".trailer-container");
const videoElement = document.querySelector("video");
button.addEventListener("click", () => {
  videoTrailerContainer.classList.remove("active");
});
closeButton.addEventListener("click", () => {
  videoTrailerContainer.classList.add("active");
  videoElement.pause();
  videoElement.currentTime = 0;
});

/**
 Implemented functionality to ensure a video trailer stops playing and 
 resets once it is closed, preventing it from playing in the background. 
 This is a common pattern in web development for modal videos. 
*/

/**
 * Video Control
 * .pause() - stops the video
 * .currentTime() = 0 - to reset the video playback to the start
 */
