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
