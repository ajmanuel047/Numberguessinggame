let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
console.log(generateTarget())      

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(humanGuess == computerGuess){
    return true;
  } else if (humanGuess < computerGuess && targetNumber < humanGuess){
    return true;
  } else if(computerGuess < humanGuess && targetNumber < humanGuess) {
    return false;
  } else if(computerGuess > humanGuess && targetNumber > computerGuess){
    return false;
  } else if(computerGuess < humanGuess && targetNumber > humanGuess){
    return true;
  } else if (computerGuess > humanGuess && computerGuess > targetNumber) {
    return false;
  } else if (humanGuess > computerGuess && humanGuess > targetNumber) {
    return true;
  }
}

let updateScore = (str) => {
if(str == 'human'){
  humanScore+=1
}else if(str == 'computer'){
  computerScore +=1
}
}

let advanceRound = () => {
  currentRoundNumber += 1
}
// let output1 = compareGuesses(4, 3, 2)
// console.log(output1)                
// advanceRound()
// console.log(currentRoundNumber)
