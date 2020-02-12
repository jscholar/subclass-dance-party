var ScubaDog = function(top, left, timeBetweenSteps) {
  this.velocity = [0, 0];
  SurfaceDog.call(this, top, left, timeBetweenSteps);
  this.top =$('body').height() / 2;
  this.left =$('body').width() / 2;
  this.$node = $('<img class="dog dancer" src="assets/scubaDogPic.png"/>');
};

ScubaDog.prototype = Object.create(Dancer.prototype);
ScubaDog.prototype.constructor = ScubaDog;

ScubaDog.prototype.step = function() {
  Dancer.prototype.step.call(this);


  var force = [0, 0];

  // Apply force

  if (this.top > $('body').height() / 4) {
    // Add drag force
    var speed = Math.sqrt(
      Math.pow(this.velocity[0], 2) +
      Math.pow(this.velocity[1], 2)
    );
    var forceDrag = [
      -this.velocity[0] * (speed*speed)/50,
      -this.velocity[1] * (speed*speed)/50,
    ];
    force[0] += forceDrag[0];
    force[1] += forceDrag[1];
  } else {
    // Add gravity force
    force[1] += 0.1;
  }

  // If dog is underwater and there is a target
  if (window.mouseHover && this.top > $('body').height() / 4) {
    // Orient dog to point at target
    this.$node.css({
      transform: 'rotate(' +
        (-Math.atan((window.mouseX - this.left) / (window.mouseY - this.top)) - Math.PI / 2)
      + 'rad)' + ' scaleX(' + window.mouseY > this.top ? -1 : 1 + ')'
    });
    //debugger;
    // Add seeking force
    var forceSeek = this.seek(window.mouseX, window.mouseY);
    force[0] += forceSeek[0];
    force[1] += forceSeek[1];
  }


  this.velocity[0] += force[0];
  this.velocity[1] += force[1];
  // Apply velocity
  this.left += this.velocity[0];
  this.top += this.velocity[1];
  this.setPosition();
};

ScubaDog.prototype.seek = function(x, y) {
  var desiredV = [x - this.left, y - this.top];

  // Find and normalize impulse
  var impulse = [desiredV[0] - this.velocity[0], desiredV[1] - this.velocity[1]];
  var magnitude = Math.sqrt(Math.pow(impulse[0], 2) + Math.pow(impulse[1], 2));
  impulse[0] /= magnitude;
  impulse[1] /= magnitude;

  // Scale impulse to desired magnitude
  impulse = [impulse[0] * Math.abs(this.distance / 2), impulse[1] * Math.abs(this.distance / 2)];
  return impulse;
};