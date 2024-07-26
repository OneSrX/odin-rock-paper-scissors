const gameButtons = document.querySelectorAll(".game-button");
const restartButton = document.querySelector(".restart-button");
const dialog = document.querySelector("dialog");
const roundResultDisplay = document.querySelector(".round-result");
const verdictDisplay = document.querySelector(".final-verdict");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(getHumanChoice(button.id), getComputerChoice());
  });
});

restartButton.addEventListener("click", restartGame);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (dialog.open) {
      roundResultDisplay.textContent = "Please refresh the page to restart";
      disableGameButtons();
    }
  }
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice(choice) {
  return choice.toLowerCase();
}

// Main game logic
function playRound(humanChoice, computerChoice) {
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper") {
          roundResult = "Rock? Paper covers it. Better luck next time!";
          computerScore++;
        } else if (computerChoice === "scissors") {
          roundResult = "Rock beats scissors. Wow, so original!";
          humanScore++;
        }
        break;

      case "paper":
        if (computerChoice === "rock") {
          roundResult = "Paper covers rock. Classic win for you!";
          humanScore++;
        } else if (computerChoice === "scissors") {
          roundResult = "Scissors cut paper. Nice choice, though!";
          computerScore++;
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          roundResult = "Scissors? Rock crushes them!";
          computerScore++;
        } else if (computerChoice === "paper") {
          roundResult = "Paper gets cut. So clean!";
          humanScore++;
        }
        break;
    }
  }

  // Update display with results and scores
  updateScores();
  roundResultDisplay.textContent = roundResult;

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
    dialog.showModal();
  }
}

// Update scores
function updateScores() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

// Announce the winner
function announceWinner() {
  verdictDisplay.textContent =
    humanScore > computerScore
      ? "🎉🎉🎉 Yay, You won!"
      : "❌❌❌ Boo, You lost!";
}

// Disable game buttons
function disableGameButtons() {
  gameButtons.forEach((button) => {
    button.disabled = true;
  });
}

// Restart the game
function restartGame() {
  roundResultDisplay.textContent = "Good luck this time!";

  humanScore = 0;
  computerScore = 0;
  updateScores();

  dialog.close();
}
