import Player from "./characters/Player.js";
import Enemy from "./characters/Enemy.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const myPlayer = new Player(10, 10, "black", ctx);
const enemies = [];

const gameLoop = setInterval(play, 1000 / 30);
let counter = 0;

// Turns / Frames
function play() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myPlayer.draw();
  if (counter % 90 === 0) {
    enemies.push(new Enemy(ctx, canvas));
  }
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.move();
    if (
      enemy.x > myPlayer.x &&
      enemy.x < myPlayer.x + myPlayer.width &&
      enemy.y > myPlayer.y &&
      enemy.y < myPlayer.y + myPlayer.height
    ) {
      gameOver();
    }
  });
  counter++;
  if (counter % 10 === 0) {
    arrowListener();
  }
}

function arrowListener() {
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    switch (event.code) {
      case "ArrowUp":
        myPlayer.moveUp();
        break;
      case "ArrowDown":
        myPlayer.moveDown();
        break;
    }
  });
}

function gameOver() {
  clearInterval(gameLoop);
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", 10, 50);
}
