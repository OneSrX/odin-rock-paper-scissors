function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  let choice = "";

  if (randomNum === 0) {
    choice = "rock";
  } else if (randomNum === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper or scissors): ");
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log("You win! Paper beats Rock");
      humanScore += 1;
    } else if (humanChoice === "scissors") {
      console.log("You lose! Rock beats Scissors");
      computerScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      console.log("You lose! Paper beats Rock");
      computerScore += 1;
    } else if (humanChoice === "scissors") {
      console.log("You win! Scissors beat Paper");
      humanScore += 1;
    }
  } else if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log("You win! Rock beats Scissors");
      humanScore += 1;
    } else if (humanChoice === "paper") {
      console.log("You lose! Scissors beat Paper");
      computerScore += 1;
    }
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
