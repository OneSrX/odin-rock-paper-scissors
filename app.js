const gameButtons = document.querySelectorAll(".game-button");
const restartButton = document.querySelector(".restart-button");
const modal = document.querySelector("dialog");
const roundResultDisplay = document.querySelector(".round-result");
const verdictDisplay = document.querySelector(".final-verdict");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

var humanScore = 0;
var computerScore = 0;

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = getHumanChoice(button.textContent);
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});

restartButton.addEventListener("click", restartGame);

/** Function */
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function getHumanChoice(choice) {
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = "It's a tie!";
  }

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

  // Update display with results and scores
  roundResultDisplay.textContent = roundResult;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
    modal.showModal();
    disableGameButtons(true);
  }
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;

  verdictDisplay.textContent = "";
  roundResultDisplay.textContent = "Choose your move to start the game";
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  modal.close();
  disableGameButtons(false);
}

function announceWinner() {
  let message = humanScore > computerScore ? "Yay you won!" : "Oh, you lost?";
  verdictDisplay.textContent = message;
}

function disableGameButtons(bool) {
  gameButtons.forEach((button) => {
    button.disabled = bool;
  });
}
