var MovingDancer = function(top, left, timeBetweenSteps, initV = [0, 0]) {
  this.velocity = new Vector(...initV);
  timeBetweenSteps = 1000 * (1 / 60); // Interval length 1 / 60 seconds, AKA 60hz
  MovingDancer.prototype.parent.constructor.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.parent = Dancer.prototype;

MovingDancer.prototype.step = function() {
  MovingDancer.prototype.parent.step.call(this);

  this.position.add(this.velocity);

  this.setPosition();
};
