let score = 0;
let time = 90;
let gameRunning = false;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const startButton = document.getElementById("startButton");

let timer;

startButton.addEventListener("click", startGame);

target.addEventListener("click", catchTarget);

function startGame() {

    score = 0;
    time = 90;

    scoreText.textContent = score;
    timeText.textContent = time;

    gameRunning = true;

    target.style.display = "block";

    startButton.textContent = "Restart Game";

    moveTarget();

    clearInterval(timer);

    timer = setInterval(function() {

        time--;

        timeText.textContent = time;

        if (time <= 0) {
            endGame();
        }

    }, 1000);
}

function catchTarget() {

    if (!gameRunning) {
        return;
    }

    score+= 5;

    scoreText.textContent = score;

    moveTarget();
}

function moveTarget() {

    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

function endGame() {

    gameRunning = false;

    clearInterval(timer);

    target.style.display = "none";

    alert("Game Over! Your score was " + score);
}
