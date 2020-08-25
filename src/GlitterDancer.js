var GlitterDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('glitter');
};

GlitterDancer.prototype = Object.create(BlinkyDancer.prototype);
GlitterDancer.prototype.constructor = GlitterDancer;

GlitterDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  var animation = {
    animation: 'neon ' + String(this.timeBetweenSteps) + 'ms infinite linear'
  };
  this.$node.css(animation);
};
