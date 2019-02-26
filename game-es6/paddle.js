class Paddle extends Entity {
  constructor(game) {
    super(game);
    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.speed = 10;

    this.y = game.height / 2 - this.height; // center vertically
  }
  update() {
    super.update();
    // y will always stay below or equal to 0
    this.y = Math.min(Math.max(this.y, 0), this.game.height - this.height);
  }
}
