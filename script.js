alert("First to 5 points wins the match!");
let clickEventVar = function clickEvent(){
    userChoice = this.textContent.toLowerCase();
    playGame(userChoice);
}

let computerScore = 0;
let userScore = 0;
const choices = document.querySelectorAll("button");
choices.forEach((button) => {
    button.addEventListener("click", clickEventVar);
})
const score = document.querySelector("#score");
function computerPlay() {
    const selection = Math.floor(Math.random() * 3) + 1;
    switch (selection) {
        case 1:
            return "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
    }
}


function playGame(userChoice, computerChoice = computerPlay()) {
    switch (evaluateWinner(userChoice, computerChoice)) {
        case 0:
            alert(`The computer chose ${userChoice} too, so you tied!`);
            updateScore(0);
            break;
        case 1:
            alert(`The computer chose ${computerChoice}, so you won!`);
            updateScore(1);
            break;
        case -1:
            alert(`The computer chose ${computerChoice}, so you lost.`);
            updateScore(-1);
            break;
    }
    score.textContent = (`${userScore} - ${computerScore}`);
    checkEnd();
}

function checkEnd() {
    let end = false;
    if (userScore === 5 && computerScore === 5) {
        alert("Wow! A tie game!");
        end = true;
    }
    else if (userScore >= 5) {
        alert("Congratulations! You won the match!");
        end = true;
    }
    else if (computerScore >= 5) {
        alert("So close! The computer wins this time!");
        end = true;
    }
    if(end){
        choices.forEach((button) => button.removeEventListener("click", clickEventVar));
    }
}

function evaluateWinner(userChoice, computerChoice) {
    let scoreUpdate = 0;
    if (userChoice === computerChoice) {
        return scoreUpdate;
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        scoreUpdate = -1;
        return scoreUpdate;
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        scoreUpdate = -1;
        return scoreUpdate;
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        scoreUpdate = -1;
        return scoreUpdate;
    }

    else {
        scoreUpdate = 1;
        return scoreUpdate;
    }
}

function updateScore(result) {
    switch (result) {
        case 0:
            userScore += 0.5;
            computerScore += 0.5;
            break;
        case 1:
            userScore++;
            break;
        case -1:
            computerScore++;
            break;
    }
}
