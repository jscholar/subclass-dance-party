// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.position = new Vector(left, top);
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition();

};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function () {
  var styleSettings = {
    top: this.position.x,
    left: this.position.y
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(index, length) {
  this.position.x = $("body").height() / 2;
  this.position.y = ((index + 1) * $("body").width() / (length + 1));

  // Set the new position
  this.setPosition();
};

Dancer.prototype.flip = function() {
  this.$node.toggleClass('flip-horizontally');
};
