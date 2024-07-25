const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const cpuChoice = getCpuChoice();
    const playerChoice = getPlayerChoice(event.target.textContent);

    display.textContent = `CPU: ${cpuChoice}, Player: ${playerChoice}`;
  });
});

function getPlayerChoice(choice) {
  return choice.toLowerCase();
}

function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);

  return choices[randomNum];
}
