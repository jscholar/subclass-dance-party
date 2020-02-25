var SquareDancer = function (top, left, timeBetweenSteps) {
  RandomColoredDancer.call(this, top, left, timeBetweenSteps);
  this.direction = 'right';
  this.$node.css({
    transition: timeBetweenSteps + 'ms',
    'transition-timing-function': 'linear'
  });
};

squareDancer.prototype = Object.create(RandomColoredDancer.prototype);

squareDancer.prototype.constructor = squareDancer;

squareDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  // Check which direction
  //   Go that direction and then change directions

  var distance = $('body').height() / 8; // Move down
  // Dance like a square

  switch (this.direction) {
  case 'down':
    this.top += distance;
    this.direction = 'right';
    break;
  case 'right':
    this.left += distance;
    this.direction = 'up';
    break;
  case 'up':
    this.top -= distance;
    this.direction = 'left';
    break;
  case 'left':
    this.left -= distance;
    this.direction = 'down';
    break;
  }

  this.setPosition();

};
