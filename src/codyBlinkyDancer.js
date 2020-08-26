var CodyBlinkyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/XJT8GQb/cody-removebg-preview.png" width="200" height="200"/>');
};

CodyBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
CodyBlinkyDancer.prototype.constructor = CodyBlinkyDancer;

CodyBlinkyDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
};
