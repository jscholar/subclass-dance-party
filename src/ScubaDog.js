var ScubaDog = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

ScubaDog.prototype = Object.create(Dancer.prototype);
ScubaDog.prototype.constructor = ScubaDog;

SucbaDog.prototype.seek = function(target) {

};