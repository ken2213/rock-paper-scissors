
const choiceArray = [
  'rock',
  'paper', 
  'scissor',
];


/*
  Here lies the Random Choices of Computer which is limited 
  to the items in the Global variable choiceArray[]
*/
let getComputerChoice = () => {
  let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  return randomChoice;
};

// PLAY ROUND LOGIC
let playRound = (playerSelection, computerSelection) => {
  
  //***************** ROCK ALGORITHM *****************
  if ((playerSelection == choiceArray[0]) && (computerSelection == choiceArray[1])) {

    return `You Lose! ${choiceArray[0]} loses to ${choiceArray[1]}\n\nThis will be the First Step to Dominate the Human Race ;) \n\t\t\t\t-AI`;

  } else if ((playerSelection == choiceArray[0]) && (computerSelection == choiceArray[2])) {

      return `You Win! ${choiceArray[0]} Wins ${choiceArray[2]}`;
  
  } 
  //***************** PAPER ALGORITHM *****************
    else if ((playerSelection == choiceArray[1]) && (computerSelection == choiceArray[0])) {

      return `You Win! ${choiceArray[1]} Wins ${choiceArray[0]}`;

  } else if ((playerSelection == choiceArray[1])  && (computerSelection == choiceArray[2])) {

      return `You Lose! ${choiceArray[1]} loses to ${choiceArray[2]}\n\nThis will be the First Step to Dominate the Human Race ;) \n\t\t\t\t-AI`;

  } 
  //***************** SCISSORS ALGORITHM *****************
    else if ((playerSelection == choiceArray[2]) && (computerSelection == choiceArray[0])) {

      return `You Lose! ${choiceArray[2]} loses to ${choiceArray[0]}\n\nThis will be the First Step to Dominate the Human Race ;) \n\t\t\t\t-AI`;

  } else if ((playerSelection == choiceArray[2]) && (computerSelection == choiceArray[1])) {
      
      return `You Win! ${choiceArray[2]} wins ${choiceArray[1]}`;

  } else {
      return `FUCKING TIE!!!`;
  }

};

const playerSelection = prompt("Please Pick: Rock, Paper, Scissor");
const computerSelection = getComputerChoice();




console.log(`Player: ${playerSelection}`);
console.log(`Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));










