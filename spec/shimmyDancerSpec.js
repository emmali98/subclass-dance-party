describe('shimmyDancer', function() {

  var shimmyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shimmyDancer = new ShimmyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shimmyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds the shimmy animation', function() {
    sinon.spy(shimmyDancer.$node, 'css');
    shimmyDancer.step();
    var animation = {
      animation: 'rotation ' + String(timeBetweenSteps * 2) + 'ms infinite linear',
      position: 'absolute'
    };
    expect(shimmyDancer.$node.css.calledWith(animation)).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shimmyDancer, 'step');
      expect(shimmyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shimmyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shimmyDancer.step.callCount).to.be.equal(2);
    });
  });
});
