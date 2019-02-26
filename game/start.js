var canvas = document.getElementById("game"),
    game = new Game(canvas);

// TODO: Complete the start and game function

game.entities = [
    game.player = new Player(game),
    game.bot = new Bot(game),
    game.ball = new Ball(game),
    game.score = new Score(game)
];

game.start(); // Start will trigger game loop
canvas.focus();