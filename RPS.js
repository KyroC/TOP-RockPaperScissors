var playerScore = 0;
var computerScore = 0;

function computerPlay(){

    let computerChoice = ""
    let botChoice = Math.floor(Math.random() * 3)
    if( botChoice == 0 ) {
        computerChoice = "Rock"
    } else if( botChoice == 1) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection == computerSelection.toLowerCase()) {
        return "It's a tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        computerScore += 1
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "rock" && computerSelection =="Scissors") {
        playerScore += 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        computerScore += 1
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore += 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        computerScore += 1
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore += 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
}
function game() {

    for (i = 0 ; i < 5 ; i++){
        const playerSelection = prompt("Choose Rock, Paper or Scissors!")
        const computerSelection = computerPlay()

        console.log(playRound(playerSelection, computerSelection))
        console.log(playerScore, computerScore);
        

    }
}
console.log(game())