import { getUserChoice, getEnemyChoice, resetPoints } from "./helper.js";

const radioButtons = document.getElementsByName("choice");
const userChoiceImage = document.querySelector(".user-choice");
const modalHeader = document.querySelector(".modal__header");
const content = document.querySelector(".modal__content");
const modalRoot = document.querySelector(".modal-container");
const modalFooter = document.querySelector(".modal__footer");
const userScore = document.querySelector(".user-score");
const enemyScore = document.querySelector(".enemy-score");
const draw = document.querySelector(".draw");

(function setUserImage() {
  radioButtons.forEach((radio) =>
    radio.addEventListener("click", () => {
      switch (radio.value) {
        case "Rock":
          userChoiceImage.src = "images/rock.jpg";
          break;
        case "Paper":
          userChoiceImage.src = "images/paper.jpg";
          break;
        case "Scissor":
          userChoiceImage.src = "images/scissors.jpg";
          break;
      }
    })
  );
})();

/*
  ROCK- 0 - 1
  PAPER- 1 -  2
  SCISSOR - 2 - 3
*/

// logic for checking who wins
export function fight() {
  const user = getUserChoice();
  const enemy = getEnemyChoice();

  if (user === enemy) {
    draw.innerHTML = parseInt(draw.textContent) + 1;
    resultModal("DRAW!!!");
    // console.log("draw");
  }
  /* used modulo to stay at 1-3 only 
       so if it is equals to the enemy's choice, enemy will win because we just add 1 
       to make the condition easy and we dont need to use '>', '<' and make longer if else
      
       e.g 
        user ROCK = 0 (cause of +1 and modulo is now 1)
        enemy PAPER = 1
        so panalo paper dito kase originally mas mataas value niya sa rock
       
       e.g
        user ROCK = 0 (cause of +1 and modulo is now 1)
        enemy SCISSOR = 2
        so mas malaki dito scissor but panalo dapat rock
        kaya sa else na punta nito 
       */
  // basta pag nag equal ang values panalo enemy pota
  else if ((user + 1) % 3 === enemy) {
    enemyScore.innerHTML = parseInt(enemyScore.textContent) + 1;
    resultModal("ENEMY WINS!!!");
    // console.log("enemy-wins");
  } else {
    userScore.innerHTML = parseInt(userScore.textContent) + 1;
    resultModal("YOU WIN!!!");
    // console.log("user-wins");
  }

  if (userScore.textContent == 10) {
    endModal("YOU WIN");
    resetPoints(enemyScore, userScore, draw);
  } else if (enemyScore.textContent == 10) {
    endModal("YOU LOSE");
    resetPoints(enemyScore, userScore, draw);
  }
}

// toggles when the user/enemy reaches 10 points
function endModal(winOrLose) {
  modalHeader.innerHTML = winOrLose;
  content.innerHTML = "Thank you for playing!";
  modalFooter.innerHTML = "-Jiseeeh";
  modalRoot.classList.add("visible");
}

// toggles on every round
function resultModal(message) {
  modalHeader.innerHTML = "";
  modalFooter.innerHTML = "";
  content.classList.add("center");
  content.innerHTML = message;
  modalRoot.classList.toggle("visible");
}
