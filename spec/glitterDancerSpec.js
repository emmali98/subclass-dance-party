describe('glitterDancer', function() {

  var glitterDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    glitterDancer = new GlitterDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(glitterDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(glitterDancer.$node, 'toggle');
    glitterDancer.step();
    expect(glitterDancer.$node.toggle.called).to.be.true;
  });

  it('should change colors', function() {
    // clock.tick(timeBetweenSteps);
    // var borderColor1 = glitterDancer.$node.css('border-color');
    // clock.tick(timeBetweenSteps / 2);
    // var borderColor2 = glitterDancer.$node.css('border-color');
    // expect(borderColor1 !== borderColor2).to.be.true;
    sinon.spy(glitterDancer.$node, 'css');
    glitterDancer.step();
    var animation = {
      animation: 'neon ' + String(timeBetweenSteps) + 'ms infinite linear',
    };
    expect(glitterDancer.$node.css.calledWith(animation)).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(glitterDancer, 'step');
      expect(glitterDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(glitterDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(glitterDancer.step.callCount).to.be.equal(2);
    });
  });
});
