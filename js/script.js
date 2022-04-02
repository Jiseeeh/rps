import { fight, randomize,images } from "./visuals.js";
import "./win.js";
const startButton = document.querySelector(".start-button");

// executes when the fight button was clicked

startButton.addEventListener("click", () => {
  const randomizeImage = setInterval(randomize, 1);
  // disables the button temporarily to prevent unlimited clicks
  startButton.disabled = true;

  setTimeout(function () {
    clearInterval(randomizeImage);
    fight();
    // enables the button again after a round
    startButton.disabled = false;
  }, 2000);
});

function loadImages () {
  let img = new Image()
  for (const image of images) {
    img.src = image
    // console.log(image);
  }
}

window.onload = loadImages