var SurfaceDog = function(top, left) {
  debugger;
  top = ($('body').height() / 3.75) + Math.random() * ($('body').height() / 10);
  left = Math.abs(left - this.length);
  let vx = 1.5 + (Math.random() - 1);

  SurfaceDog.prototype.parent.constructor.call(this, top, left, null, [vx, 0]);
  this.$node = $('<img class="dog dancer" src="assets/surfaceDogPic.png"/>');
  if (Math.random() < 0.5) {
    this.turnAround();
  }
  this.setPosition();
};

SurfaceDog.prototype = Object.create(MovingDancer.prototype);
SurfaceDog.prototype.constructor = SurfaceDog;
SurfaceDog.prototype.parent = MovingDancer.prototype;
SurfaceDog.prototype.length = 60;

SurfaceDog.prototype.step = function() {
  this.avoidWall();

  window.surfaceDogs.forEach(this.avoidObject.bind(this));

  SurfaceDog.prototype.parent.step.call(this);
};

SurfaceDog.prototype.turnAround = function() {
  this.velocity.scale(-1);
  this.flip();
};

SurfaceDog.prototype.avoidWall = function() {
  if (
    // Avoid wall with small buffer
    this.position.x + 5 * this.velocity.x >= $('body').width() - this.length ||
    this.position.x + 5 * this.velocity.x <= 0
  ) {
    this.turnAround();
  }
};


SurfaceDog.prototype.avoidObject = function(object) {
  if (object === this || Math.abs(this.position.y - object.position.y) > 30) {
    return;
  }
  // If going to collide with object
  if (
    // Collide from the left;
    (this.position.x + this.length) + this.velocity.x > object.position.x &&
    (this.position.x + this.length) < object.position.x
    ||
    // Collide from the right
    this.position.x + this.velocity.x < object.position.x + object.length &&
    this.position.x > object.position.x + object.length
  ) {
    // Don't
    this.turnAround();
  }

};
