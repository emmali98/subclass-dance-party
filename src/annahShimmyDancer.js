var AnnahShimmyDancer = function(top, left, timeBetweenSteps) {
  ShimmyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/wczKXXh/annahnobg.png" width="200" height="200"/>');
};

AnnahShimmyDancer.prototype = Object.create(ShimmyDancer.prototype);
AnnahShimmyDancer.prototype.constructor = AnnahShimmyDancer;

AnnahShimmyDancer.prototype.step = function() {

  ShimmyDancer.prototype.step.call(this);
};
