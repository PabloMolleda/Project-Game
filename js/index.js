const startButton = document.getElementById('btn-Start');
const canvasContainer = document.querySelector('.canvas-container')
const startContainer = document.querySelector('.start-container')
const gameOverContainer = document.querySelector('.gameOver-container')
const winContainer = document.querySelector('.win-container ')


const gameOverScore = document.querySelector('.score-gOver')
const winScore = document.querySelector('.score-win')






window.onload = () => {
    document.getElementById('btn-Start').onclick = () => {
        setStart()
        setCanvas()
        jumpGame.init('canvas')
    };

    document.getElementById('btn-Try').onclick = () => {
        document.location.reload()
    };

};




function setCanvas() {
    console.log(canvasContainer)
    canvasContainer.classList.toggle('invisible')
    canvasContainer.classList.toggle('visible')
}

function setStart() {
    startContainer.classList.toggle('visible')
    startContainer.classList.toggle('invisible')
}

function setGameOver() {
    gameOverContainer.classList.toggle('invisible')
    gameOverContainer.classList.toggle('visible')
    console.log(this.scoreNum)
    gameOverScore.innerHTML(this.scoreNum)

}

function setWin() {
    winContainer.classList.toggle('invisible')
    winContainer.classList.toggle('visible')

    winScore.textContent(this.score)

}