var Vector = function (x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.add = function (vector) {
  this.x += vector.x;
  this.y += vector.y;
};

Vector.prototype.scale = function (scalar) {
  this.x = scalar * this.x;
  this.y = scalar * this.y;
};

/**
 * Return a normalized Vector object
 */
Vector.prototype.normalize = function() {
  return new Vector(
    this.x / this.getMagnitude(), this.y / this.getMagnitude()
  );
};

Vector.prototype.getMagnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
