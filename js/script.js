import {fight,setUserImage,randomize} from './visuals.js'
import './win.js'
const startButton = document.querySelector(".start-button");


// executes when the fight button was clicked
// TODO:! try prevent unlimited clicks
startButton.addEventListener("click", () => {
  const randomImage = setInterval(randomize, 1);

  setTimeout(function () {
    clearInterval(randomImage);
    fight()
  }, 2000);
});

setUserImage()