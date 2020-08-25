var DogShimmyDancer = function(top, left, timeBetweenSteps) {
  ShimmyDancer.call(this, top, left, timeBetweenSteps);
};

DogShimmyDancer.prototype = Object.create(ShimmyDancer.prototype);
DogShimmyDancer.prototype.constructor = DogShimmyDancer;

DogShimmyDancer.prototype.step = function() {
  this.$node = $('<img src="https://i.ibb.co/MRJZf4g/dogpng.png" width="100" height="100">');
  ShimmyDancer.prototype.step.call(this);
};
