const choices = document.querySelectorAll("button");
choices.forEach((button) => {
    button.addEventListener("click", () => {
        userChoice = button.textContent.toLowerCase();
        playGame(userChoice);
    });
})
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
            console.log(`You both chose ${userChoice}, so you tied!`);
            updateScore(0);
            console.log(`${userScore} - ${computerScore}`);
            return;
        case 1:
            console.log(`${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} beats ${computerChoice}, so you won!`);
            updateScore(1);
            console.log(`${userScore} - ${computerScore}`);
            return;
        case -1:
            console.log(`${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${userChoice}, so you lost.`);
            updateScore(-1);
            console.log(`${userScore} - ${computerScore}`);
            return;
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
            return;
        case 1:
            userScore++;
            return;
        case -1:
            computerScore++;
            return;
    }
}
let userScore = 0;
let computerScore = 0;