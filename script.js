
const choiceArray = ['rock','paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;


/*
  Here lies the Random Choices of Computer which is limited 
  to the items in the Global variable choiceArray[]
*/
let getComputerChoice = () => {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
};


// PLAY ROUND FUNCTION
let playRound = (playerSelection, computerSelection) => {
  
  if (playerSelection == computerSelection) {
    return `Tie Game!`;
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissor') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissor' && computerSelection == 'paper')
    ) {
      playerScore += 5;
      if (playerScore === 1) {
        return `Human: ${playerScore}`;
      } else if (playerScore === 2) {
          return `Human: ${playerScore}`;
      } else if (playerScore === 3) {
          return `Human: ${playerScore}`;
      } else if (playerScore === 4) {
          return `Human: ${playerScore}`;
      } else {
          return `Human: ${playerScore}`;
      }
  } else {
    computerScore += 5;
    if (computerScore === 1) {
      return `Computer: ${computerScore}`;
    } else if (computerScore === 2) {
        return `Computer: ${computerScore}`;
    } else if (computerScore === 3) {
        return `Computer: ${computerScore}`;
    } else if (computerScore === 4) {
        return `Computer: ${computerScore}`;
    } else {
      return `computer: ${computerScore}`;
    }
  }
};


// WINNER FUNCTION 
let winner = (playerScore, computerScore) => {
  if (playerScore === computerScore) {
    console.log("TIE");
  } else if (playerScore > computerScore) {
    console.log("human wins")
  } else {
    console.log("computer Wins!");
  }
}



// GAME FUNCTION
let game = () => {

  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Please pick! Rock, Paper, or Scissors!");
    computerSelection = getComputerChoice();

    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
  }
  winner(playerScore, computerScore);
};


game();

