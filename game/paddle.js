function Paddle(game) {
    Entity.call(this);
    this.game = game;

    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.speed = 10;

    this.y = game.height / 2 - this.height; // center vertically
}

Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function () {
    Entity.prototype.update.apply(this, arguments);

    // y will always stay below or equal to 0
    this.y = Math.min(Math.max(this.y, 0), this.game.height - this.height);
}