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
            return 0;
        case 1:
            console.log(`${userChoice.charAt(0).toUpperCase()}${userChoice.slice(1)} beats ${computerChoice}, so you won!`);
            return 1;
        case -1:
            console.log(`${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${userChoice}, so you lost.`);
            return -1;
    }
}

function getInput() {
    while (true) {
        let userChoice = prompt("Rock, paper, or scissors?");
        userChoice = userChoice.toLowerCase();
        if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            alert("That's not a valid choice! Try again.");
            continue;
        }
        return userChoice;
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


function playMatch() {
    let scoreCounter = 0;
    let gamesPlayed = 0;
    for (gamesPlayed; gamesPlayed < 5; gamesPlayed++) {
        let userChoice = getInput();
        let score = playGame(userChoice);
        scoreCounter += score;
    }
    if (scoreCounter > 0) {
        console.log(`Congratulations, you won! The end score was ${(scoreCounter + 5) / 2} - ${gamesPlayed - (scoreCounter + 5) / 2}.`);
    }
    else if (scoreCounter === 0) {
        console.log(`Wow, a tie game! The end score was ${(scoreCounter + 5) / 2} - ${gamesPlayed - (scoreCounter + 5) / 2}.`);
    }
    else {
        console.log(`Tough luck, you lost. The end score was ${(scoreCounter + 5) / 2} - ${gamesPlayed - (scoreCounter + 5) / 2}.`);
    }
}
playMatch();