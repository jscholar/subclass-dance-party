var Vector = function (x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.add = function (vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this;
};

Vector.prototype.subtract = function (vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  return this;
};

Vector.prototype.scale = function (scalar) {
  this.x = scalar * this.x;
  this.y = scalar * this.y;
  return this;
};

/**
 * Return a normalized Vector object
 */
Vector.prototype.normalized = function() {
  let magnitude = this.getMagnitude();
  if (magnitude === 0) {
    return new Vector(0, 0);
  }
  return new Vector(
    this.x / magnitude, this.y / magnitude
  );
};

Vector.prototype.getMagnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
