document.getElementById("start-button").addEventListener("click", startGame);
const gameIntroElement = document.querySelector(".game-intro");
const gameOverElement = document.querySelector(".game-over");
const restartButton = gameOverElement
	.querySelector("button")
	.addEventListener("click", refreshPage);

function refreshPage(){
	window.location=window.location;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let background,
	hugo,
	obstacles = [],
	frameCounter = 0,
	moveSpeed = 5,
	intervalId,
	score = 0;

function startGame() {
	gameOverElement.classList.add("hidden");
	gameIntroElement.classList.add("hidden");
	reset();
	console.log("STart game : move speed: "+moveSpeed);
	background = new Background(canvas, ctx, moveSpeed);
	hugo = new Hugo(canvas, ctx);

	createEventListeners();
	update();
}

function update() {
	clear();
	frameCounter++;
	if (frameCounter % 10 === 0) {
		score += 3;
	}
	if (frameCounter === 60) {
		obstacles.push(new Obstacle(canvas, ctx, moveSpeed));
		frameCounter = 0;
	}
	background.move();
	background.draw();
	hugo.draw();
	obstacles.forEach((obstacle) => {
		obstacle.move();
		obstacle.draw();
	});
	drawScore();

	if (collisionBetweenCarAndObstacle()) {
		gameOverElement.classList.remove("hidden");
		reset();
		return;
	}
	intervalId = requestAnimationFrame(update);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createEventListeners() {
	document.addEventListener("keydown", (e) => {

		console.log("Key pressed : "+e.key);
		switch (e.key) {
			case "ArrowRight":
				hugo.moveRight();
				break;
			case "ArrowLeft":
				hugo.moveLeft();
				break;
			default:
				break;
		}
	});
}

function collisionBetweenCarAndObstacle() {
	let hasCollided = false;
	for (let i = 0; i < obstacles.length; i++) {
		const obstacle = obstacles[i];
		const withinX =
			hugo.x + hugo.width > obstacle.x && hugo.x < obstacle.x + obstacle.width;
		const withinY =
			obstacle.y + obstacle.height > hugo.y && obstacle.y < hugo.y + hugo.height;

		hasCollided = withinX && withinY;

		if (hasCollided) {
			break;
		}
	}
	return hasCollided;
}

function drawScore() {
	ctx.fillStyle = "black";
	ctx.font = "32px sans-serif";
	ctx.fillText(`Score: ${score}`, 20, 50);
}

function reset() {
	
	cancelAnimationFrame(intervalId);
	background = null;
	hugo = null;
	obstacles = [];
	score = 0;
	frameCounter = 0;
}
