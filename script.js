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
let roundWinner = '';

//Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    //Case sensitive
    const response = playerSelection.toLowerCase();

    //player wins
    if (playerSelection == 'rock' && computerSelection == 'scissor') {
        roundWinner = 'player';
        return "Player wins! Rock beats Scissors";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        roundWinner = 'player';
        return "Player wins! Paper beats Rock";
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        roundWinner = 'player';
        return "Player wins! Scissors beats Paper";

    //computer wins
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        roundWinner = 'computer';
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundWinner = 'computer';
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        roundWinner = 'computer';
        return "You lose! Scissors beats Paper";

    //tie
    } else {
        roundWinner = 'tie';
        return "It's a tie!";
    }
}

function updateScore () {
    if (roundWinner == 'player') {
        playerScore++;
    } else if (roundWinner == 'computer') {
        computerScore++;
    }
}

function game (playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScore();

    //setting id attribute 'resultOutput' to resultOutput variable
    const resultOutput = document.getElementById('resultOutput');

    //storing the result in textContent property
    resultOutput.textContent = result;

    //setting id attribute 'finalOutput' to finalOutput variable
    const finalOutput = document.getElementById('finalOutput');

    //storing the player and computer score in textContent property
    finalOutput.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

    endGame();
}

function endGame() {
    let message = "";
    //when either the player or computer reach a score of 5
    if (computerScore == 5 || playerScore == 5) {
        if (computerScore == 5) {
            message = "Game Over, You lost the game. Reload the page to play again";

            //disabling the buttons after a score of 5 is reached
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissor").disabled = true;
        } else if (playerScore == 5) {
            message = "Game Over, You won the game. Reload the page to play again";

            //disabling the buttons after a score of 5 is reached
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissor").disabled = true;
        }
    }

    //Printing the message depending on who wins
    document.getElementById('winner').innerHTML = message;
}

game (); 