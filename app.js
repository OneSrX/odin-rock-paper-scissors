const scoreDisplays = document.querySelectorAll(".player-score");
const gameButtons = document.querySelectorAll(".game-button");
const gameDisplay = document.querySelector(".game-display");
const dialog = document.querySelector("dialog");
const resultText = document.querySelector(".result-text");
const resultEmoji = document.querySelector(".result-emoji");
const restartButton = document.querySelector(".restart-button");

// const resultDisplay = document.querySelector(".result-display");

let humanScore = 0;
let computerScore = 0;

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button.id), getComputerChoice());
  });
});

restartButton.addEventListener("click", restartGame);

// Main game logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    updateGameDisplay("It's a tie!");
    return;
  }

  let roundResult = "";
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        roundResult = "Rock is covered by Paper";
        computerScore++;
      } else if (computerChoice === "scissors") {
        roundResult = "Rock crushes Scissors";
        humanScore++;
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        roundResult = "Paper covers Rock";
        humanScore++;
      } else if (computerChoice === "scissors") {
        roundResult = "Paper is cut by Scissors";
        computerScore++;
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        roundResult = "Scissors are crushed by Rock";
        computerScore++;
      } else if (computerChoice === "paper") {
        roundResult = "Scissors cut Paper";
        humanScore++;
      }
      break;
  }

  // Update display with results and scores
  updateScoreDisplays();
  updateGameDisplay(roundResult);

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
    showDialog();
  }
}

// Restart the game
function restartGame() {
  humanScore = 0;
  computerScore = 0;

  updateScoreDisplays();
  updateGameDisplay("Good luck this time!");

  dialog.close();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice(choice) {
  return choice.toLowerCase();
}

function updateScoreDisplays() {
  scoreDisplays.forEach((display) => {
    switch (display.id) {
      case "human":
        display.textContent = humanScore;
        break;
      case "computer":
        display.textContent = computerScore;
        break;
    }
  });
}

function updateGameDisplay(message) {
  gameDisplay.textContent = message;
}

function announceWinner() {
  const [winEmoji, winText] = ["🎉🎉🎉", "Congrats! You won!"];
  const [loseEmoji, loseText] = ["❌❌❌", "Too bad! You lost!"];

  if (humanScore === 5) {
    resultEmoji.textContent = winEmoji;
    resultText.textContent = winText;
  } else {
    resultEmoji.textContent = loseEmoji;
    resultText.textContent = loseText;
  }
}

// Show the dialog and prevent it from closing on Esc press
function showDialog() {
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
    }
  });
  dialog.showModal();
}
