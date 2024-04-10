
let playerWins = 0;

let computerWins = 0;

let rounds = 0;
let n = 5;

function playRound(button) {

    if(rounds < n) {
    
    let choices = ["rock", "paper", "scissors"];
    
    let playerChoice = String(button);

    let computerChoice = choices[parseInt(Math.random() * 3)];
    
    displayChoice.innerHTML = "You chose <span class= \"highlight\">" + playerChoice +"</span> and computer chose <span class = \"highlight\">"+computerChoice+"</span>";


    if(playerChoice === computerChoice) {
        displayWin.textContent = "Draw!";
    } else if((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
        displayWin.textContent = "You win! :D";
        playerWins++;
        rounds++;
    } else if((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissors') || (playerChoice == 'scissors' && computerChoice == 'rock')) {
        displayWin.textContent = "computer wins :("
        computerWins++;
        rounds++;
    } else {
        console.log("invalid choice")
    }

    
    displayPlayerWins.textContent = `your wins: ${playerWins}`;
    displayComputerWins.textContent = `computer wins: ${computerWins}`;
    
    if(rounds === n) {
    displayStatus.textContent = (playerWins<computerWins) ? 'Computer wins the game ;-;' : 'You win the game!! ^o^'}
    // playAgain.textContent = "Reset"
    }
}

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    
    playRound(target.textContent.toLowerCase())
    displayBorder();


// playAgain.addEventListener("click", () => {
//     console.log("test");
// })
})



const display = document.querySelector(".display");
const results = document.createElement("p");
results.classList.add("results");

const displayChoice = document.createElement("div");
displayChoice.classList.add("choice");

const displayWin = document.createElement("div");
displayWin.classList.add("choice")

const displayPlayerWins = document.createElement("div");
const displayComputerWins = document.createElement ("div");
displayComputerWins.classList.add("wins");
displayComputerWins.classList.add("wins");

const displayStatus = document.createElement("div");
displayStatus.classList.add("status");

// const playAgain = document.querySelector(".reset");

display.appendChild(results);
results.appendChild(displayChoice);
results.appendChild(displayWin);
results.appendChild(displayPlayerWins);
results.appendChild(displayComputerWins);
results.appendChild(displayStatus);


let displayBorder = () => {
    display.style.cssText = "border: 2px solid black; border-radius: 10px; padding: 10px;"
    // playAgain.id = "clickme";

};
