function computerPlay() {
    const selection = Math.floor(Math.random() * 3) + 1;
    switch (selection) {
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function playGame(userChoice, computerChoice = computerPlay()) {
    console.log(evaluateWinner(userChoice, computerChoice));
}

function evaluateWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return (`Tie game! You both chose ${userChoice}, so no winner.`);
    }
    else {
        if (userChoice === "Paper" && computerChoice === "Scissors") {
            return ("Scissors beats paper! You lost.");
        }
        else if (userChoice === "Rock" && computerChoice === "Paper") {
            return ("Paper beats rock! You lost.");
        }
        else if (userChoice === "Scissors" && computerChoice === "Rock") {
            return ("Rock beats scissors! You lost.");
        }

        else {
            return (`${userChoice} beats ${computerChoice}! You won.`)
        }
    }

}

playGame("Rock");
playGame("Paper");
playGame("Scissors");
playGame("Scissors");