const gameButtons = document.querySelectorAll(".game-button");
const resetButton = document.querySelector(".reset-button");
const display = document.querySelector(".display");
const humanScoreDisplay = document.querySelector(".human-score-display");
const computerScoreDisplay = document.querySelector(".computer-score-display");

var humanScore = 0;
var computerScore = 0;

gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = getHumanChoice(button.textContent);
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  });
});

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
  updateDisplays(roundResult, humanScore, computerScore);

  if (humanScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function updateDisplays(...args) {
  display.textContent = args[0];
  humanScoreDisplay.textContent = args[1];
  computerScoreDisplay.textContent = args[2];
}

function announceWinner() {
  let finalResult = "";

  if (humanScore === 5) {
    finalResult = "Yay you won! But at what cost...";
  } else if (computerScore === 5) {
    finalResult = "Oh, you lost? Must be a special talent of yours!";
  }

  display.textContent = finalResult;
}
