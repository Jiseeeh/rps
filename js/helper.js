import { images } from "./constants.js";

const radioButtons = document.getElementsByName("choice");
const enemyChoiceImage = document.querySelector(".enemy-choice");
/**
 * It loops through the radio buttons, and if one is checked, it returns the index of that button.
 * @returns The index of the radio button that is checked.
 */
export function getUserChoice() {
  let choice;
  let temp;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      choice = i;
      temp = radioButtons[i].value;
      break;
    }
  }
  // console.log("user", temp, choice);
  return choice;
}

/**
 * It gets a random choice from the radio buttons when the fight button was clicked and
 * sets the enemy choice image and caption to the choice.
 * @returns The choice of the enemy.
 */
export function getEnemyChoice() {
  const enemyCaption = document.querySelector(".enemy-caption");
  // gets a random choice from the radio buttons
  const choice = getRandom(radioButtons);
  enemyChoiceImage.src = images[choice];
  enemyCaption.innerHTML = radioButtons[choice].value;
  // console.log("enemy", radioButtons[choice].value, choice);
  return choice;
}

/**
 * It returns a random number between 0 and the length of the array.
 * @param array - The array to get a random element from.
 * @returns The random number is being returned.
 */
export function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

/**
 * It takes an array of images, then randomly selects one of those images and sets it as the source of
 * an image element.
 * @param imagesArray - an array of images
 */
export function randomizeEnemyImage() {
  const rng = images[getRandom(images)];
  enemyChoiceImage.src = rng;
}

/**
 * This function resets the score to 0 for the enemy, user, and draw scores.
 * @param enemyScore - The score of the enemy
 * @param userScore - The score of the user
 * @param drawScore - The score for the number of draws
 */
export function resetPoints(enemyScore, userScore, drawScore) {
  enemyScore.textContent = 0;
  userScore.textContent = 0;
  drawScore.textContent = 0;
}
