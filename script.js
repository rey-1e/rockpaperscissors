console.log("Hello World!");

function getComputerChoice() {
    let num = Math.random();

    if(num <= 0.33) {
        return "rock";
    } else if(num <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let ans = prompt("Choose amongst (ROCK, PAPER, SCISSORS)", "VALUE");
    ans = ans.toLowerCase(ans);
    
    return ans; 
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(computerChoice, humanChoice) {

    if(computerChoice == "rock" && humanChoice == "scissors") {
        console.log("Computer Wins!");
        computerScore++;
    } else if(computerChoice == "rock" && humanChoice == "paper") {
        console.log("Human Wins!");
        humanScore++;
    } else if(computerChoice == "paper" && humanChoice == "rock") {
        console.log("Computer Wins!");
        computerChoice++;
    } else if(computerChoice == "paper" && humanChoice == "scissors") {
        console.log("Human Wins!");
        humanScore++;
    } else if(computerChoice == "scissors" && humanChoice == "rock") {
        console.log("Human Wins!");
        humanScore++;
    } else if(computerChoice == "scissors" && humanChoice == "paper") {
        console.log("Computer Wins!");
        computerScore++;
    } else {
        console.log("It's a Tie!");
    }

}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let currHumanChoice = getHumanChoice();
        let currComputerChoice = getComputerChoice();

        playRound(currComputerChoice, currHumanChoice);
        console.log(`Human : ${humanScore}` + " " + `Computer : ${computerScore}`);
    }

    //final winner : 
    if(humanScore > computerScore) {
        console.log("Human Wins the Battle");
    } else if(humanScore < computerScore) {
        console.log("Computer Wins the Battle");
    } else {
        console.log("There's no Winner to this Match");
    }
}


playGame();
