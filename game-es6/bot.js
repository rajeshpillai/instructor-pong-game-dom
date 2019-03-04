class Bot extends Paddle {
  constructor(game) {
    super(game);
    this.name = "bot";
    this.speed = 5;

    this.x = game.width - this.width - 20; // margin

    let bot = document.createElement("div");
    bot.style.position = "absolute";
    bot.style.width = this.width + "px";
    bot.style.height = this.height + "px";

    bot.style.left = this.x + "px";
    bot.style.top = this.y + "px";

    bot.setAttribute("id", "bot");
    this.player = bot;
    game.canvas.append(bot);
  }

  draw() {
    var bot = this.player;
    bot.style.left = this.x + "px";
    bot.style.top = this.y + "px";
  }

  update() {
    // Bot will follow the ball (simple AI)
    if (this.y < this.game.ball.y) {
      this.yVelocity = this.speed;
    } else if (this.y > this.game.ball.y) {
      this.yVelocity = -this.speed;
    }
    super.update();
  }
}
