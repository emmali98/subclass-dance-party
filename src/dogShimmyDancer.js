var DogShimmyDancer = function(top, left, timeBetweenSteps) {
  ShimmyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/MRJZf4g/dogpng.png" width="200" height="200">');
};

DogShimmyDancer.prototype = Object.create(ShimmyDancer.prototype);
DogShimmyDancer.prototype.constructor = DogShimmyDancer;

DogShimmyDancer.prototype.step = function() {
  ShimmyDancer.prototype.step.call(this);
};
