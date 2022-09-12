
let playerSelection;
let computerSelection;
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");

function playerChoice(button) {
    playerSelection = button.value;
    
    const p = document.createElement('p');
    p.innerText = playerSelection;
    resultDiv.appendChild(p);
};


function computerChoice() {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * 3);
    computerSelection = arrOfChoices[random];
    
    const r = document.createElement('p');
    r.innerText = computerSelection;
    resultDiv.appendChild(r);
};


btn.forEach((button) => {
    button.addEventListener('click', () => {

        playerChoice(button);
        computerChoice();

    });
});

