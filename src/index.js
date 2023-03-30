const baseUrl = 'http://localhost:3000/'
const gamesUrl = baseUrl + 'games/'

document.addEventListener('DOMContentLoaded', (e) => {
    fetch (gamesUrl)
    .then (res => res.json())
    .then (gamesData => renderAllGames(gamesData))

})


// add the names of all the games in the #game-list nav element
// each element needs to be an h5 tag.

function renderAllGames(gamesData) {
    gamesData.forEach(game => renderGame(game))
}

const gameListNav = document.getElementById("current-game-list")
const gameImage = document.getElementById('detail-image')
const gameTitle = document.getElementById('detail-title')
const gameHighScore = document.getElementById('detail-high-score')

function renderGame(game) {
    
    const gameNameAndManufacturer = document.createElement('h5')
    gameNameAndManufacturer.id = game.id
    gameNameAndManufacturer.textContent = game.name + ` (${game['manufacturer_name']})`
    gameListNav.appendChild(gameNameAndManufacturer)


// When the page loads, show the image, name, and high_score properties of the the first game 
//in the array returned from your fetch.

if(game.id === 1) {
gameImage.src = game.image
gameTitle.textContent = game.name
gameHighScore.textContent = game['high_score']
}

gameNameAndManufacturer.addEventListener('click', () => displayGameDetails(game))

}

//When the user clicks on one of the games in the list, display all the details of that game.

function displayGameDetails(game) {
    //console.log('Game has been clicked!')
    //console.log(event.target)
    gameImage.src = game.image
    gameTitle.textContent = game.name
    gameHighScore.textContent = game['high_score']
}

//The user should be able to enter a high score in the form on the right side 
//and have it show that value for "high score".

const scoreInputForm = document.getElementById('high-score-form')
const scoreInput = document.getElementById('score-input')

scoreInputForm.addEventListener('submit', () => updateHighScore())

function updateHighScore() {
    console.log(event.target)
    event.preventDefault()
    gameHighScore.textContent = scoreInput.value
    scoreInputForm.reset()
}