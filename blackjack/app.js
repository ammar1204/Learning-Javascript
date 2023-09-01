let player = {
    name: "Ammar",
    chips: 100
}
let card = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let cards = document.getElementById("card")
let sums = document.getElementById("sum")
let start = document.getElementById("start")
let messageEl = document.getElementById("message-el")
let message = ""
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number > 10) {
        return 10
    } else if (number === 1){
        return 11
    } else {
        return number
    }
}
 

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card.push(firstCard)
    card.push(secondCard)
    sum = firstCard  + secondCard
    renderGame()
    
}

function renderGame() {
    cards.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        cards.textContent += card[i] + " ";        
    }
    sums.textContent = "Sum: " + sum 
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo!!, You have got Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}
function drawCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
    sum += newCard
    card.push(newCard)
   
    renderGame()
}
    }
    
