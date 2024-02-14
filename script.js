domain = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

imageMap = {
    "rock" : "rock.jpeg",
    "paper": "paper.jpg",
    "scissors": "scissor.png"
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
        return 0;
    } else {
        let victor = (domain[player] == computer) ? player : computer;

        if (victor == player) {
            return 1;
        } else {
            return -1;
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

// Dynamic logic

const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');

const buttons = document.querySelectorAll('button');

const playerImage = document.querySelector('img#player_choice');
const computerImage = document.querySelector('img#computer_choice');

const playerScoreboard = document.getElementById('player_score');
const computerScoreboard = document.getElementById('computer_score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        const name = elem.id;
        const computerChoice = getComputerChoice();

        // Swap the image. 
        playerImage.src = imageMap[name];
        computerImage.src = imageMap[computerChoice];

        result = playRound(name, computerChoice);

        if (result == 0) {
            setTimeout(function() {
                alert("Tied!");
            }, 200);
        } else if (result == 1) {
            playerScore += 1;
            playerScoreboard.textContent=playerScore;

            if (playerScore == 5) {
                setTimeout(function() {
                    alert("You beat the computer! Congratz!");

                    playerScore = 0;
                    computerScore = 0;

                    playerScoreboard.textContent=playerScore;
                    computerScoreboard.textContent=computerScore;

                    playerImage.src = "question.jpeg";
                    computerImage.src = "question.jpeg";
                }, 500);
            } else {
                setTimeout(function() {
                    alert("You Won!");
                }, 200);
            }
        } else if (result == -1) {
            computerScore += 1;
            computerScoreboard.textContent=computerScore;

            if (computerScore == 5) {
                setTimeout(function() {
                    alert("You were beat the computer! :(");
                    playerScore = 0;
                    computerScore = 0;

                    playerScoreboard.textContent=playerScore;
                    computerScoreboard.textContent=computerScore;

                    playerImage.src = "question.jpeg";
                    computerImage.src = "question.jpeg";
                }, 500);
            } else {
                setTimeout(function() {
                    alert("You Lose!");
                }, 200);
            }
        }
    })
})
