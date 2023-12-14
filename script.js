//Function that randomly returns either 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    var movesAvailable = ['rock', 'paper', 'scissor'];

    //Generating a random index within the length of the movesAvailable array
    const randomNumber = Math.floor(Math.random() * movesAvailable.length);

    //Retrieving the move corresponding to the random index
    const computerChoice = movesAvailable[randomNumber];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    //Case sensitive
    const response = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    //player wins
    if (playerSelection == 'rock' && computerSelection == 'scissor') {
        playerScore++;
        return "Player wins! Rock beats Scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "Player wins! Paper beats Rock";
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        playerScore++;
        return "Player wins! Scissors beats Paper";

    //computer wins
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        computerScore++;
        return "You lose! Scissors beats Paper";

    //tie
    } else {
        return "It's a tie!";
    }
}

let answer = prompt("Enter either 'rock', 'paper' or 'scissor': ");

function game () {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

const playerSelection = answer;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));