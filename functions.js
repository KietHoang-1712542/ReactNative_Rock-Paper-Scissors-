import {CHOICES} from './constants'

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (playerChoice, computerChoice) => {
  let result;

  if (playerChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (playerChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (playerChoice === computerChoice) result = 'Tie game!';
  return result;
};

export {randomComputerChoice, getRoundOutcome};