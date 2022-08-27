const buttons = document.querySelectorAll('button');
const playerResult = document.querySelector('#player');
const computerResult = document.querySelector('#computer');
const roundResult = document.querySelector('#result');

// Gets random selection from computer
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return (computerChoice = choice[Math.floor(Math.random() * choice.length)]);
}

// Plays 1 round returns round winner and result
function playRound(playerSelection) {
    let result = '';
    let winner = '';
    let computerSelection = getComputerChoice();

    playerResult.src = `./images/${playerSelection}.png`;
    computerResult.src = `./images/${computerSelection}.png`;

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Draw!';
        winner = '';
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')
    ) {
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = 'player';
    } else {
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
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
        let { result, winner } = playRound();
        if (winner === 'player') {
            ++playerTotal;

        } else if (winner === 'computer') {
            ++computerTotal;
        }
    }

    if (playerTotal === computerTotal) {
        gameWinner = `It's a Draw`;
    } else if (computerTotal > playerTotal) {
        gameWinner = `Computer wins`;
    } else if (playerTotal > computerTotal) {
        gameWinner = `Player wins`;
    }
    console.log(`Game over. ${gameWinner}`);
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        playRound(playerSelection);
    });
});

// game();
