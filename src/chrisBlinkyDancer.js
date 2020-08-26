var ChrisBlinkyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/CMSSKvV/chris-removebg-preview.png" width="200" height="200"/>');
};

ChrisBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
ChrisBlinkyDancer.prototype.constructor = ChrisBlinkyDancer;

ChrisBlinkyDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
};
