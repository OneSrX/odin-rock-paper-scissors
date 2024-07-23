function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper or scissors): ").toLowerCase();
}

function playGame(rounds = 5) {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
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

  while (rounds > 0) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
    rounds -= 1;
  }

  determineWinner(computerScore, humanScore);
}

function determineWinner(cpuScore, playerScore) {
  if (cpuScore > playerScore) {
    console.log(
      `Game over! You lost. Computer Score: ${cpuScore}, Your Score: ${playerScore}`
    );
  } else if (cpuScore < playerScore) {
    console.log(
      `Congratulations! You won. Your Score: ${playerScore}, Computer Score: ${cpuScore}`
    );
  } else {
    console.log(`It's a tie! Better luck next time.`);
  }
}

playGame();
