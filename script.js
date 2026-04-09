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
};

let humanScore = 0; 
let computerScore = 0; 

//storing ids of human score and computer score; 
let human = document.querySelector("#humanScore");
let computer = document.querySelector("#computerScore");

//taking second score container; 
let humanPick = document.querySelector("#humanPick");
let computerPick = document.querySelector("#computerPick");



//winning message heading: 
let element = document.createElement("h1");
element.style.textAlign = "center";

//store the header; 
let header = document.querySelector("header");


//event listeners for all three buttons; 
let btns = document.querySelectorAll("button");

btns[0].addEventListener("click", () => {
    //rock is pressed; 
    if(humanScore >= 5 || computerScore >= 5) {
        humanScore = 0; 
        computerScore = 0; 
        element.remove();
    }
    let computerHaha = getComputerChoice();
    computerPick.innerText = computerHaha;
    humanPick.innerText = "rock";

    playGame(computerHaha, "rock");
});
btns[1].addEventListener("click", () => {
    //paper is pressed; 

    if(humanScore >= 5 || computerScore >= 5) {
        humanScore = 0; 
        computerScore = 0; 
        element.remove();
    }
    let computerHaha = getComputerChoice();
    computerPick.innerText = computerHaha;
    humanPick.innerText = "paper";

    playGame(computerHaha, "paper");
});
btns[2].addEventListener("click", () => {
    //scissors is pressed; 

    if(humanScore >= 5 || computerScore >= 5) {
        humanScore = 0; 
        computerScore = 0; 
        element.remove();
    }
    let computerHaha = getComputerChoice();
    computerPick.innerText = computerHaha;
    humanPick.innerText = "scissors";

    playGame(computerHaha, "scissors");
})


function playRound(computerChoice, humanChoice) {

    if(computerChoice == "rock" && humanChoice == "scissors") {
        
        computerScore++;
    } else if(computerChoice == "rock" && humanChoice == "paper") {
        
        humanScore++;
    } else if(computerChoice == "paper" && humanChoice == "rock") {
        
        computerScore++;
    } else if(computerChoice == "paper" && humanChoice == "scissors") {
        
        humanScore++;
    } else if(computerChoice == "scissors" && humanChoice == "rock") {
        
        humanScore++;
    } else if(computerChoice == "scissors" && humanChoice == "paper") {
        
        computerScore++;
    }

}


function playGame(currComputerChoice, currHumanChoice) {

    playRound(currComputerChoice, currHumanChoice);
    human.innerText = humanScore;
    computer.innerText = computerScore;

    //final winner : 
    if(humanScore >= 5 || computerScore >= 5) {
    if(humanScore > computerScore) {
        element.textContent = "Human Wins the Battle";
        header.after(element);
        
    } else if(humanScore < computerScore) {
        element.textContent = "Computer Wins the Battle";
        header.after(element);

    }

    }
}

