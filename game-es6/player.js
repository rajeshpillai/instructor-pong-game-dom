class Player extends Paddle {
  constructor(game) {
    super(game);
    this.x = 20;
    this.name = "player";

    let player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + "px";
    player.style.height = this.height + "px";

    player.style.left = this.x + "px";
    player.style.top = this.y + "px";

    player.setAttribute("id", "player");

    this.player = player;
    game.canvas.append(player);
  }

  draw() {
    let player = this.player;
    player.style.left = this.x + "px";
    player.style.top = this.y + "px";
  }

  update() {
    var speed = 10;

    if (this.game.keyPressed.up) {
      this.yVelocity = -speed;
    } else if (this.game.keyPressed.down) {
      this.yVelocity = speed;
    } else {
      this.yVelocity = 0; // Stop the player movement
    }
    super.update();
  }
}
