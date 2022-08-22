let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const arrOfOptions= ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const compSelection = arrOfOptions[randomNumber]
    return compSelection    
}

function playerChoice(){
    var playerSelection = window.prompt("Enter your Choice: ");
    const firstLet = playerSelection.charAt(0).toUpperCase()
    const rest = playerSelection.slice(1).toLowerCase()
    
    return firstLet+rest
}

const compSelection = getComputerChoice()
const playerSelection = 'Rock'

function playRound (playerSelection,compSelection) {
    if (playerSelection=='Rock' && compSelection=='Rock') {
        return "It's a tie!"
    }    
    else if (playerSelection=='Rock' && compSelection=='Paper') {
        return "Computer wins! You suck..."
    }
    else if (playerSelection=='Rock' && compSelection=='Scissors') {
        return "You win! The world is a step closer to being saved"
    }
}    
console.log(compSelection)
console.log(playerSelection)
console.log(playRound(playerSelection,compSelection))

