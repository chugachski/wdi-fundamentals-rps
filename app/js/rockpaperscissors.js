'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    return move || getInput();
}

// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
function getComputerMove(move) {
    return move || randomPlay(); 
}
    
// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
function getWinner(playerMove, computerMove) {
    console.log(`Player chose ${playerMove} and Computer chose ${computerMove}`);
    var winner;
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === 'rock') {
        (computerMove === 'paper') ? winner = 'computer' : winner = 'player';
    } else if (playerMove === 'paper') {
        (computerMove === 'scissors') ? winner = 'computer' : winner = 'player';
    } else {
        (computerMove === 'rock') ? winner = 'computer' : winner = 'player';
    }
    return winner;
}

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while(playerWins < 5 && computerWins < 5) {
        console.log(`The score is currently Player: ${playerWins} to Computer: ${computerWins}\n`);
        var winner = getWinner(getPlayerMove(), getComputerMove());
        // why doesn't calling getPlayerMove w/o an arg generate an error?
        // also, why not call getInput and randomPlay from here directly?
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } else {
            console.log('Tie');
        }
    }

    if (playerWins > computerWins) {
        console.log('Player is the game winner!');
    } else {
        console.log('Computer is the game winner!');
    }

    return [playerWins, computerWins];
}

playToFive();
