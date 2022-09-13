
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");
let pscoreDiv = document.querySelector(".pscore");
let cscoreDiv = document.querySelector(".cscore");


function computerChoice() {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    computerSelection = arrOfChoices[random];

    return computerSelection;
};

function playRound(playerSelection,computerSelection) {

    if (playerSelection === computerSelection) {
        const res = document.createElement('span');
        res.innerText = "It's a tie!"
        resultDiv.appendChild(res);
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore = ++playerScore;
        let score = document.createElement('span');
        score = playerScore
        pscoreDiv.insertAdjacentHTML("afterend",score);

        const res = document.createElement('span');
        res.innerText = "You win!"
        resultDiv.appendChild(res);

    }


}






btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        playRound(playerSelection,computerChoice());
        
        
        


    });
});

