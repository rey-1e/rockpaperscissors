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

