/*
3. Write a function to generate numbers from 0 - 2.
0 should serve for Rock. 1 for paper. 2, for scissors.
*/
function getComputerChoice(){
    const randomNumbers = Math.floor(Math.random () *3);

    if (randomNumbers === 0){
        return "rock";
    }
    else if(randomNumbers === 1){
        return "paper";
    }
    else{
        return "scissors"
    }

}
/*
4. Turn playerSelection to lowerCase for case-insensitivity
check if player selection is valid
determine the possible choices/ selection of player
determine the winner
*/

function singleRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(playerChoice)){
        return "Make a valid selection"
    };

    if (playerChoice === computerSelection){
        return "IT'S A TIE!!!"
    }
    else if (
        playerChoice === 'rock' && computerSelection === 'scissors',
        playerChoice === 'paper' && computerSelection === 'rock',
        playerChoice === 'scissors' && computerSelection === 'paper' 
    ){
        return `YOU WIN!!! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `YOU LOSE!!! ${playerSelection} loses to ${computerSelection}`
    }
}

const playerSelection = prompt('pick a weapon')
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection)); 

function game(){
    let playerScore = 0;
    let computerScore = 0;
    const roundToWin = 5;

    for(let round = 0; round <=4; round++){
        const playerSelection = prompt('pick a weapon')
        const computerSelection = getComputerChoice();
        const result = singleRound(playerSelection, computerSelection);

        //console.log(`Round ${round}: ${result}`)

        if (result.includes("WIN")){
            playerScore++
        }
        
        else if (result.includes("WIN")){
            computerScore++
        }
    }
    console.log(`Game over; Player Score: ${playerScore} Computer Score: ${computerScore}`)

    if (playerScore = computerScore){
        return "You Win!";
    }
    else if(playerScore < computerScore){
        return "Sorry! You Lose";
    }
    else{
        return "It's a tie";
    }
}

game();