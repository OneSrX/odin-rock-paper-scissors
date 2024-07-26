const gameButtons = document.querySelectorAll(".game-button");
const restartButton = document.querySelector(".restart-button");
const dialog = document.querySelector("dialog");
const roundResultDisplay = document.querySelector(".round-result");
const finalResultDisplay = document.querySelector(".final-result");
const humanScoreDisplay = document.querySelector(".player-score.human");
const computerScoreDisplay = document.querySelector(".player-score.computer");

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
    updateRoundResultDisplay("It's a tie!");
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
  updateScoreDisplay();
  updateRoundResultDisplay(roundResult);

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
    showDialog();
  }
}

// Restart the game
function restartGame() {
  humanScore = 0;
  computerScore = 0;

  updateScoreDisplay();
  updateRoundResultDisplay("Good luck this time!");

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

function updateScoreDisplay() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function updateRoundResultDisplay(message) {
  roundResultDisplay.textContent = message;
}

function announceWinner() {
  finalResultDisplay.textContent =
    humanScore > computerScore
      ? "🎉🎉🎉 Congrats! You won!"
      : "❌❌❌ Too bad! You lost!";
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
