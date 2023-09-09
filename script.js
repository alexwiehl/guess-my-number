"use strict";

let secretNumber = Math.ceil(Math.random() * 20);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // NO INPUT
  if (!guess) {
    displayMessage("Please choose a number between 1 and 20");

    // CORRECT GUESS
  } else if (guess === secretNumber) {
    displayMessage("You got it!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // WRONG GUESS
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? "Guess too high" : "Guess too low");
      document.querySelector(".score").textContent = score;
      // document.querySelector("body").style.backgroundColor = "#fd8d1c";
    } else {
      score--;
      displayMessage("Game over.");
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#f84f4f";
    }
  }
});

// AGAIN BUTTON
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);

  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
