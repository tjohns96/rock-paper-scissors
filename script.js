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
