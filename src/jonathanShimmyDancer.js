var JonathanShimmyDancer = function(top, left, timeBetweenSteps) {
  ShimmyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/MfD6H3N/jonathan-removebg-preview.png" width="200" height="200"/>');
};

JonathanShimmyDancer.prototype = Object.create(ShimmyDancer.prototype);
JonathanShimmyDancer.prototype.constructor = JonathanShimmyDancer;

JonathanShimmyDancer.prototype.step = function() {

  ShimmyDancer.prototype.step.call(this);
};
