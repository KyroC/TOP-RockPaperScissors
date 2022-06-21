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
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "rock" && computerSelection =="Scissors") {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
}
const playerSelection = "rock"
const computerSelection = computerPlay()

console.log(playRound(playerSelection,computerSelection))