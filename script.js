let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
// const getAbsoluteDistance = () => {

// }

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let userdifference =  Math.abs(humanGuess - targetNumber)
  let computerdifference = Math.abs(computerGuess - targetNumber)
  
  if(humanGuess < 0 || humanGuess > 9){
    alert('Please input a number greater or equal to 0 and less than 10.')
  } else {
    switch(true){
      case userdifference > computerdifference:
        return false;
      case userdifference < computerdifference || userdifference == computerdifference:
        return true;
    }
  }
 

 
}

const updateScore = (str) => {
switch(true){
  case str == 'human':
  humanScore++;
  break;
  default:
  computerScore++;
}
}

function advanceRound(){
  currentRoundNumber++
}
