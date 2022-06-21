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
    console.log(computerChoice)
    console.log(botChoice)
}

computerPlay()