const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

var humanScore = 0;
var computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;

    const humanSelection = getHumanChoice(clickedButton.textContent);
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
    roundResult = "It's a tie! No winners here.";
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
        roundResult = "Paper gets cut. Guess you're just better!";
      }
      break;
  }

  display.textContent = roundResult;
}
