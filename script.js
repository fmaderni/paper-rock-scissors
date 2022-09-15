
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");
let pscore = document.querySelector(".psc");
let cscore = document.querySelector(".csc");
const pScore = document.createElement('span');
const cScore = document.createElement('span');
const res = document.createElement('h3');

function computerChoice() {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    computerSelection = arrOfChoices[random];

    return computerSelection;
};

function displayPscore() {
    playerScore = ++playerScore;

    pScore.innerText = `${playerScore}`
    pscore.appendChild(pScore);

    res.innerText = "You win!"
    resultDiv.appendChild(res);
}

function displayCscore() {
    computerScore = ++computerScore;

    cScore.innerText = `${computerScore}`
    cscore.appendChild(cScore);

    res.innerText = "Computer Wins!"
    resultDiv.appendChild(res);
}

function resetGame(playerScore,computerScore) {
    if(playerScore === 5 || computerScore === 5) {
        
        const reset = document.createElement('button');
        reset.classList.add("reset");
        reset.innerText = 'Play again';
        resultDiv.appendChild(reset);

        const refreshPage = () => {
            location.reload();
        }

        reset.addEventListener('click',refreshPage);
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore === 5) {

        const h2 = document.createElement('h2');
        h2.innerText = 'You defeated the machine! The world has been saved!'
        resultDiv.appendChild(h2);
    }
    else
        if (computerScore === 5) {
            const h2 = document.createElement('h2');
            h2.innerText = 'You lost. The world has been destroyed'
            resultDiv.appendChild(h2);
        }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        res.innerText = "It's a tie!"
        resultDiv.appendChild(res);
    }
    else
        if (playerSelection === "Rock") {

            if (computerSelection === "Scissors") {
                displayPscore();
            }
            if (computerSelection === "Paper") {
                displayCscore();
            }
        }
        else
            if (playerSelection === "Paper") {

                if (computerSelection === "Rock") {
                    displayPscore();
                } else
                    if (computerSelection === "Scissors") {
                        displayCscore();
                    }
            }
            else
                if (playerSelection === "Scissors") {

                    if (computerSelection === "Paper") {
                        displayPscore();
                    } else
                        if (computerSelection === "Rock") {
                            displayCscore();
                        }
                }

}


btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        computerChoice();
      
        playRound(playerSelection, computerSelection);
        checkWinner(playerScore,computerScore);
        resetGame(playerScore,computerScore);

    });
})

