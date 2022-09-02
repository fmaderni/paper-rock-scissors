
let playerSelection;
let computerSelection;
let val;
let btn = document.querySelectorAll(".button");
let resultDiv = document.querySelector(".result");


function getComputerSelection(){

}






btn.forEach((button) => {
    button.addEventListener('click',() => {
        playerSelection = button.value;
        const p = document.createElement('span');
        p.innerText = playerSelection
        resultDiv.appendChild(p);
    });
});


