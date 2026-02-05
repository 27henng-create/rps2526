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
let playerChoice
addEventListener.container()

// while(playerscore < 5 && compscore < 5){
//     while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
//         playerChoice = prompt("Would you like to pick Rock, Paper, or Scissors?").toLowerCase();
//     }
//         let a = Math.random()
//     let computerChoice;
//     if(a < (1/3)){
//         console.log("rock")
//         computerChoice = "rock"
//     } else if(a < (2/3)){
//         console.log("paper")
//         computerChoice = "paper"
//     } else {
//         console.log("scissors")
//         computerChoice = "scissors"
//     }


//     // Actual Gameplay going on for Rock, Paper, Scissors
//     if(computerChoice == playerChoice){
//         console.log(`It's a tie!  Computer chose ${computerChoice}, Player chose ${playerChoice}`)
//         alert(`It's a tie!  Computer chose ${computerChoice}, Player chose ${playerChoice}`)
//     } else if(computerChoice == "rock"){
//         if(playerChoice == "scissors"){
//             console.log('Computer wins, Rock beats Scissors!')
//             alert('Computer wins, Rock beats Scissors!')
//             compscore += 1
//         } else {
//             console.log('Player wins, Paper beats Rock!')
//             alert('Player wins, Paper beats Rock!')
//             playerscore += 1
//         }
//     } else if(computerChoice == "paper"){
//         if(playerChoice == "scissors"){
//             console.log('Player wins, Scissors beats Paper')
//             alert('Player wins, Scissors beats Paper')
//             playerscore += 1
//         } else {
//             console.log('Computer wins, Paper beats Rocks')
//             alert('Computer wins, Paper beats Rocks')
//             compscore += 1
//         }
//     } else if(computerChoice == "scissors"){
//         if(playerChoice == "paper"){
//             console.log('Computer wins, Scissors beats Paper')
//             alert('Computer wins, Scissors beats Paper')
//             compscore += 1
//         } else {
//             console.log('Player wins, Rock beats Scissors')
//             alert('Player wins, Rock beats Scissors')
//             playerscore += 1
//         }
// }
// alert(`Player = ${playerscore} Computer = ${compscore}`);
// playerChoice = 0;
// }

