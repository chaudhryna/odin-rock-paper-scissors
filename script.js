// Gets random selection from computer
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  return (computerChoice = choice[Math.floor(Math.random() * choice.length)]);
}

// Plays 1 round returns round winner and result
function playRound(playerSelection, computerSelection) {
  let result = '';
  let winner = '';

  if (playerSelection === computerSelection) {
    result = 'Draw!';
    winner = '';
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    winner = 'player';
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    winner = 'computer';
  }
  return { result, winner };
}

//Gets player selection and computer selection 
// Runs 5 times
function game() {
  let computerTotal = 0;
  let playerTotal = 0;
  let gameWinner = '';

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      `Make a choice: 'rock', 'paper' or 'scissors': `,
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    let { result, winner } = playRound(playerSelection, computerSelection);
    console.log(`Round ${i}`);
    console.log(result);
    
    if (winner === 'player') {
        ++playerTotal
    } else if (winner === 'computer') {
        ++computerTotal
    }
  }

  if (playerTotal === computerTotal) {
    gameWinner = `It's a Draw`;
  } else if (computerTotal > playerTotal) {
    gameWinner = `Computer wins`;
  } else if (playerTotal > computerTotal) {
    gameWinner = `Player wins`;
  }
  console.log(`Game over. ${gameWinner}`)
}

// Start game

game();
