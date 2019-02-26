function Entity() {
    this.x = 0;
    this.y = 0;

    // Dimensions
    this.width = 0;
    this.height = 0;

    // An entity can have speed and directtion
    this.xVelocity = 0;
    this.yVelocity = 0;

}

// Called on each update of the timer
Entity.prototype.update = function () {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
}

// Basic Bounding Box collision detection
// Returns 'true' if the entity intersect with another one

Entity.prototype.intersect = function (other) {
    return this.y + this.height > other.y &&
        this.y < other.y + other.height &&
        this.x + this.width > other.x &&
        this.x < other.x + other.width;
}