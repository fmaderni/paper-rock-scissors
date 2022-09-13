
let playerSelection;
let computerSelection;
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");


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

