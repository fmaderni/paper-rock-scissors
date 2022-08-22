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

const playerSelection = playerChoice()

function playRound (playerSelection,compSelection) {
    if (playerSelection=='Rock' && compSelection=='Rock') {
        return "It's a tie!"
    }    
    else if (playerSelection=='Rock' && compSelection=='Paper') {
        computerScore++
        return "Computer wins! You suck..."
    }
    else if (playerSelection=='Rock' && compSelection=='Scissors') {
        playerScore++
        return "You win! The world is a step closer to being saved"
    }
    if (playerSelection=='Paper' && compSelection=='Paper') {
        return "It's a tie!"
    }    
    else if (playerSelection=='Paper' && compSelection=='Scissors') {
        computerScore++
        return "Computer wins! You suck..."
    }
    else if (playerSelection=='Paper' && compSelection=='Rock') {
        playerScore++
        return "You win! The world is a step closer to being saved"
    }
    if (playerSelection=='Scissors' && compSelection=='Scissors') {
        return "It's a tie!"
    }    
    else if (playerSelection=='Scissors' && compSelection=='Rock') {
        computerScore++
        return "Computer wins! You suck..."
    }
    else if (playerSelection=='Scissors' && compSelection=='Paper') {
        playerScore++
        return "You win! The world is a step closer to being saved"
    }

} 

function game() {
    for (let i = 0; i < 5; i++){
        
        const compSelection = getComputerChoice()
        console.log(playRound(playerSelection,compSelection))
    
    }
}

game()

function score() {
    if (playerScore < computerScore) {
        return "Machines won.The world has been destroyed"
    }
    else if(playerScore > computerScore){
        return "You saved the world! You're a hero!"
    } 
    else {
        return "Play again you failure"
    } 
}
console.log(score())

