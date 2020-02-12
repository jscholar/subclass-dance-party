var SurfaceDog = function(top, left, timeBetweenSteps) {
  this.distance = ($('body').width() / 500) * (1 + (Math.random() - 1));
  this.distance = Math.random() > 0.5 ? this.distance : -this.distance;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 20;
  this.top = ($('body').height() / 4) + Math.random() * ($('body').height() / 10);
  this.setPosition();
  this.$node = $('<img class="dog dancer" src="assets/surfaceDogPic.png"/>');
  this.distance < 0 ? this.flip() : null;
  this.$node.css({
    transition: 'none'
    // transition: timeBetweenSteps + 'ms',
    //'transition-timing-function': 'ease-in'
  });
};

SurfaceDog.prototype = Object.create(Dancer.prototype);
SurfaceDog.prototype.constructor = SurfaceDog;
SurfaceDog.prototype.step = function() {
  // Call Dancer's step
  Dancer.prototype.step.call(this);

  // If dog is about to hit left or right wall
  if (
    this.left + this.distance >= $('body').width() ||
    this.left + this.distance <= 0
  ) {
    // Change directions and flip dog img.
    this.distance *= -1;
    this.flip();
  }

  // Iterate through all surface dogs
  this.left += this.distance;
  this.setPosition();
  for (var i = 0; i < window.surfaceDogs.length; i++) {
    if (window.surfaceDogs[i] === this) {
      continue;
    }
    var otherDog = window.surfaceDogs[i];
    if (this.left <= otherDog.left) {
      if (this.left + this.distance >= otherDog.left) {
        this.distance *= -1;
        this.flip();
        break;
      };
    } else {
      if (this.left + this.distance <= otherDog.left) {
        this.distance *= -1;
        this.flip();
        break;
      };
    }
  }
};
