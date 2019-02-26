function Ball(game) {

    Entity.call(this, game);
    this.game = game;

    this.width = 20;
    this.height = 20;
    this.name = "ball";
    this.xVelocity = 5;
    this.yVelocity = 5;


    let player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';

    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';

    player.setAttribute("id", "ball");

    this.player = player;

    game.canvas.append(player);
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function () {
    let ball = this.player;
    ball.style.left = this.x + 'px';
    ball.style.top = this.y + 'px';

}

// Make it random
Ball.prototype.reset = function () {
    this.x = this.game.width / 2 - this.width; // center ball horizontally
    this.y = this.game.height / 2 - this.height; //center the ball vertically

    // Set random values if the ball goes offscreen
    let min = -5,
        max = 5;

    this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
    this.xVelocity = Math.random() > 0.5 ? 5 : -5; // 50% chance of starting from left or right

}

Ball.prototype.update = function () {
    Entity.prototype.update.apply(this, arguments); // call parent update()

    // If the ball hits the top position  move it down and vice versa
    if (this.y > this.game.height - this.height || this.y < 0) {
        this.yVelocity *= -1; // Switching the direction of the ball.
    }

    // If ball goes offscrean
    if (this.x > this.game.width) {
        // if Ball goes offscrean on the right means the 'player' has gained points
        this.game.player.score += 1;
        this.reset();
    }

    if (this.x < 0) {
        this.game.bot.score += 1; // the 'bot' gained points
        this.reset();
    }

    var hitter; // Who is hitting the ball
    if (this.intersect(this.game.bot)) {
        hitter = this.game.bot;
    } else if (this.intersect(this.game.player)) {
        hitter = this.game.player;
    }

    if (hitter) {
        this.xVelocity *= -1.1; // switching the movement
        this.yVelocity *= -1.1;

        // Add dynamism to game
        this.yVelocity += hitter.yVelocity / 2;
    }

}