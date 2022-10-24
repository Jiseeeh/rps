import { fight } from "./visuals.js";
import { images } from "./constants.js";
import { randomizeEnemyImage } from "./helper.js";
import "./win.js";

const startButton = document.querySelector(".start-button");

// executes when the fight button was clicked
startButton.addEventListener("click", () => {
  const randomizeImage = setInterval(randomizeEnemyImage, 1);
  // disables the button temporarily to prevent unlimited clicks
  startButton.disabled = true;

  setTimeout(function () {
    clearInterval(randomizeImage);
    fight();
    // enables the button again after a round
    startButton.disabled = false;
  }, 2000);
});

/**
 * It creates a new image element, and then sets the src attribute of that image element to each of the
 * images in the images array.
 *
 * The reason this works is because the browser will automatically download the image when the src
 * attribute is set.
 *
 * So, the above function will download all of the images in the images array.
 *
 * Now, we can call the loadImages function in the onload event handler of the window object.
 */
function loadImages() {
  let img = new Image();
  for (const image of images) img.src = image;
}

window.onload = loadImages;
