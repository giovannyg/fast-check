const assert = require('assert');
const { SpaceBuilder, Space } = require('./space');

// The following set of tests is directly taken from CodinGame
const unit_tests = function(solver) {
  it('should succeed on: A lot of jumps', () => {
    const space = new SpaceBuilder()
      .withDimension(4, 8)
      .withSolution(3, 7)
      .withCurrent(2, 3)
      .build();
    solver(space, 40);
    assert.ok(space.solved());
  });
  it('should succeed on: Less jumps', () => {
    const space = new SpaceBuilder()
      .withDimension(25, 33)
      .withSolution(2, 29)
      .withCurrent(24, 2)
      .build();
    solver(space, 49);
    assert.ok(space.solved());
  });
  it('should succeed on: Lesser jumps', () => {
    const space = new SpaceBuilder()
      .withDimension(40, 60)
      .withSolution(38, 38)
      .withCurrent(6, 6)
      .build();
    solver(space, 32);
    assert.ok(space.solved());
  });
  it('should succeed on: Tower', () => {
    const space = new SpaceBuilder()
      .withDimension(1, 80)
      .withSolution(0, 36)
      .withCurrent(0, 1)
      .build();
    solver(space, 6);
    assert.ok(space.solved());
  });
  it('should succeed on: Correct cutting', () => {
    const space = new SpaceBuilder()
      .withDimension(50, 50)
      .withSolution(22, 22)
      .withCurrent(0, 0)
      .build();
    solver(space, 6);
    assert.ok(space.solved());
  });
  it('should succeed on: Evasive', () => {
    const space = new SpaceBuilder()
      .withDimension(100, 100)
      .withSolution(0, 1)
      .withCurrent(5, 98)
      .build();
    solver(space, 7);
    assert.ok(space.solved());
  });
  it('should succeed on: Not there', () => {
    const space = new SpaceBuilder()
      .withDimension(9999, 9999)
      .withSolution(9754, 2531)
      .withCurrent(54, 77)
      .build();
    solver(space, 14);
    assert.ok(space.solved());
  });
};

module.exports = { unit_tests };
