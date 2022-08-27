const buttons = document.querySelectorAll('button');
const playerResult = document.querySelector('#player');
const computerResult = document.querySelector('#computer');
const roundResult = document.querySelector('#result');
let h1 = document.querySelector('h1');
let playerWins = document.querySelector('#player-wins');
let computerWins = document.querySelector('#computer-wins');
let round = 0;
let computerTotal = 0;
let playerTotal = 0;
let gameWinner = '';

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
    game(result, winner);
}
// Resets game for 5 more rounds
function resetGame() {
    round = 0;
    computerTotal = 0;
    playerTotal = 0;
    gameWinner = '';
    h1.textContent = `Let's Go Again!`;
    roundResult.textContent = '';
    playerWins.textContent = playerTotal;
    computerWins.textContent = computerTotal;
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

// Runs 5 times
function game(result, winner) {
    if (winner === 'player') {
        ++playerTotal;
        playerWins.textContent = playerTotal;
    } else if (winner === 'computer') {
        ++computerTotal;
        computerWins.textContent = computerTotal;
    }
    if (round === 5) {
        if (playerTotal === computerTotal) {
            gameWinner = `It's a Draw`;
        } else if (computerTotal > playerTotal) {
            gameWinner = `Computer wins`;
        } else if (playerTotal > computerTotal) {
            gameWinner = `Player wins`;
        }
        h1.innerHTML = `Game over.<br>${gameWinner} <button class="reset">Play Again?</button>`;
        buttons.forEach((button) => {
            button.disabled = true;
        });
        document.querySelector('.reset').addEventListener('click', resetGame);
    }
}
// Listens for the players choice and increments rounds
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round++;
        h1.innerHTML = `Round ${round}`;
        playerSelection = button.id;
        playRound(playerSelection);
    });
});
