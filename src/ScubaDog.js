var ScubaDog = function(top, left, timeBetweenSteps) {
  this.strength = 2.5 + Math.random() * 5;
  ScubaDog.prototype.parent.constructor.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dog dancer" src="assets/scubaDogPic.png"/>');
  this.setPosition();
};

ScubaDog.prototype = Object.create(MovingDancer.prototype);
ScubaDog.prototype.constructor = ScubaDog;
ScubaDog.prototype.parent = MovingDancer.prototype;

ScubaDog.prototype.step = function() {
  ScubaDog.prototype.parent.step.call(this);
  var force = new Vector(0, 0);

  if (this.position.y > $('body').height() / 4) {

    /* ---------- Drag Force --------- */
    var dragForce = this.velocity.normalized().scale(-1); // Get direction of drag
    dragForce.scale(Math.pow(this.velocity.getMagnitude(), 2));
    dragForce.scale(World.dragWater);
    force.add(dragForce);
    /* -------------------------------- */


    /* -------------------------------- */
    /*        To-do: Buoyant force      */
    /* -------------------------------- */
  } else {

    /* -------- Gravity Force --------- */
    var gravityForce = new Vector(0, World.gravity);
    force.add(gravityForce);
    /* -------------------------------- */
  }

  // If dog is underwater and there is a target
  if (window.mouseHover && this.position.y > $('body').height() / 4) {

    /* -------------------------------- */
    /*        To-do: Orient Dog         */
    /* -------------------------------- */

    var forceSeek = this.seek(window.mouseX, window.mouseY);
    force.add(forceSeek);
  }

  force.scale(World.scale);

  this.accelerate(force);
};

ScubaDog.prototype.seek = function(x, y) {
  // Find and normalize seeking force
  var desiredV = new Vector(x - this.position.x, y - this.position.y);
  var seekingForce = desiredV.subtract(this.velocity).normalized();

  // Scale impulse to desired magnitude
  seekingForce.scale(this.strength);
  return seekingForce;
};
