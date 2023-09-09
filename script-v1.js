"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "New content";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 30;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.ceil(Math.random() * 20);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent =
      "Please choose a number between 1 and 20";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You got it!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Guess too high";
      document.querySelector(".score").textContent = score;
      // document.querySelector("body").style.backgroundColor = "#fd8d1c";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Game over.";
    }
  }

  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Guess too low";
      document.querySelector(".score").textContent = score;
      // document.querySelector("body").style.backgroundColor = "#fd8d1c";
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Game over.";
      document.querySelector("body").style.backgroundColor = "#f84f4f";
    }
  }
});

// Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
