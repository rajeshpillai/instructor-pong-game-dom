var canvas = document.getElementById("game"),
  game = new Game(canvas),
  divider = document.getElementById("divider");

// Position the divider
let width = canvas.offsetWidth;
let height = canvas.offsetHeight;

let centerX = width / 2;
divider.style.left = centerX + "px";
divider.style.height = height + "px";

game.entities = [
  (game.player = new Player(game)),
  (game.bot = new Bot(game)),
  (game.ball = new Ball(game)),
  (game.score = new Score(game))
];

game.start(); // Start will trigger game loop
canvas.focus();
