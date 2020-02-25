var randomColoredDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  this.colorSettings = {
    border: '25px solid rgb(' + red + ', ' + green + ', ' + blue + ')'
  };
  this.$node.css(this.colorSettings);
};

randomColoredDancer.prototype = Object.create(Dancer.prototype);

randomColoredDancer.prototype.constructor = randomColoredDancer;