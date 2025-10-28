// This is my javascript file for the rock, paper, scissors project


// first things first
// allow for the code to grab the players option using a function (prompt())
// have the computer grab a random option out of "rock" "paper" or "scissors" (using Math.random())
// write code about whenever you win or lose
// e.x. "You win! :) Paper beats rock" or "You lose! :( Scissors beats Paper"
// Paper > Rock
// Rock > Scissors
// Scissors > Paper
// add a "tie" text


// DOUBLE CHECK
// if there are any eorrors in the code
// if the code is stated multiple times in the console (use else if{})
// if everything is SPELLED CORRECTLY 
// if the code can run something like "RoCK" or "PAPer" Etc

// Function for computer picking "Rock" "Paper" or "Scissors":
let compscore = 0
let playerscore = 0
let playerChoice = prompt("Would you like to pick Rock, Paper, or Scissors?")
let a = Math.random()
let computerChoice;
if(a < (1/3)){
    console.log("Rock")
    computerChoice = "Rock"
} else if(a < (2/3)){
    console.log("Paper")
    computerChoice = "Paper"
} else {
    console.log("Scissors")
    computerChoice = "Scissors"
}


// Actual Gameplay going on for Rock, Paper, Scissors
if(computerChoice == playerChoice){
    console.log(`It's a tie!  Computer chose ${computerChoice}`)
    console.log(`It's a tie! Player chose ${playerChoice}`)
} else if(computerChoice == "Rock"){
    if(playerChoice == "Scissors"){
        console.log('Computer wins, Rock beats Scissors!')
    } else {
        console.log('Player wins, Paper beats Rock!')
    }
} else if(computerChoice == "Paper"){
    if(playerChoice == "Scissors"){
        console.log('Player wins, Scissors beats Paper')
    } else {
        console.log('Computer wins, Paper beats Rocks')
    }
} else if(computerChoice == "Scissors"){
    if(playerChoice == "Paper"){
        console.log('Computer wins, Scissors beats Paper')
    } else {
        console.log('Player wins, Rock beats Scissors')
    }
}


// Function for player Picking the 3 options:
if(playerChoice == "Rock"){
} else if( playerChoice == "Paper"){
} else if(playerChoice == "Scissors"){
}