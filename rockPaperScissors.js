const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice!');
  } //end if else
}; //end of getUserChoice function

const getComputerChoice = function() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  } //end switch case
} //end getComputerChoice function

const determineWinner = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie.';
  } //end tie if else

    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    } //end rock if else

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    } //end paper if else

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins.';
      } else {
        return 'User wins.';
      }
    } //end scissors if else
} //end determineWinner function

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();
