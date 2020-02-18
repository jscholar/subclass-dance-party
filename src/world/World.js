var World = {
  scale: 0.01,
  gravity: 10,
  dragWater: (
    1 / 2
    * 1 // (Drag coefficient of shape) Person is approx. 1.0
    * 1 // Density of the fluid
  ),
  getDragCoefWater: function(v) {
    return World.scale * World.dragWater * Math.pow(v, 2);
  }
};
