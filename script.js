domain = {
    "Rock": "Scissor",
    "Scissor": "Paper",
    "Paper": "Rock"
}
    
function getComputerChoice() {
    arr = Object.keys(domain);
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playRound(player, computer) {
    if (!(player in domain && computer in domain)) {
        throw new Error("Invalid input!");
    }

    if (computer == player ) {
        return "Tied!"
    } else {
        let victor = (domain[player] == computer) ? player : computer;
        let loser = (player == victor) ? computer : player
        let status_report = `${victor} beats ${loser}.`;

        if (victor == player) {
            return "You win! " + status_report;
        } else {
            return "You lose! " + status_report;
        }
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let player = prompt("What will you play?");
        while (!(player in domain)) {
            player = prompt("Invalid Input!");
        }
        let computer = getComputerChoice();

        let output = playRound(player, computer);
        if (output.includes("win"))
            score += 1;
        console.log(output);
    }
}

