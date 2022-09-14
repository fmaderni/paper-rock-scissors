
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");
let pscore = document.querySelector(".psc");
let cscore = document.querySelector(".csc");
const score = document.createElement('p');
const res = document.createElement('p');

function computerChoice() {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    computerSelection = arrOfChoices[random];

    return computerSelection;
};

function displayPscore() {
    playerScore = ++playerScore;

    score.innerText = playerScore
    pscore.appendChild(score);

    res.innerText = "You win!"
    resultDiv.appendChild(res);
}

function displayCscore() {
    computerScore = ++computerScore;

    score.innerText = computerScore
    cscore.appendChild(score);

    res.innerText = "Computer Wins!"
    resultDiv.appendChild(res);
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
        console.log(playerSelection);
        console.log(computerSelection);
        playRound(playerSelection,computerSelection);






    });
})