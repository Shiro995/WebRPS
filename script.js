
function playGame(count) {

let choices = ["rock", "paper", "scissors"];

let playerWins = 0;

let computerWins = 0;

while(count > 0) {

    let playerChoice = prompt("Write your choice (Rock, Paper, or Scissors)").toLowerCase();

    let computerChoice = choices[parseInt(Math.random() * 3)];
    
    console.log("You chose " + playerChoice +" and I choose "+computerChoice);


    if(playerChoice === computerChoice) {
        console.log("Draw!")
    } else if((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
        console.log("You win!")
        playerWins++;
        count--;
    } else if((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')) {
        console.log("I win!")
        computerWins++;
        count--;
    } else {
        console.log("invalid choice")
    }

    console.log("your wins: " + playerWins)
    console.log("my wins: " + computerWins)
}

console.log((playerWins<computerWins) ? "Computer wins :(" : "You win!! :D")
}
//test
playGame(5);
