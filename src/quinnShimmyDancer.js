var QuinnShimmyDancer = function(top, left, timeBetweenSteps) {
  ShimmyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src="https://i.ibb.co/c66q3QT/quinn-meme-removebg-preview.png" width="200" height="200"/>');
  // this.$node.removeClass('dancer');
};

QuinnShimmyDancer.prototype = Object.create(ShimmyDancer.prototype);
QuinnShimmyDancer.prototype.constructor = QuinnShimmyDancer;

QuinnShimmyDancer.prototype.step = function() {

  ShimmyDancer.prototype.step.call(this);
};
