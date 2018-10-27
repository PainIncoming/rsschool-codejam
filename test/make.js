const assert = require('assert');
const make = require('../src/make.js');

describe('make', () => {
  it('make(15)(34, 21, 666)(41)(sum) => 777', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('make(17, 4)(97, 12)()(mul) => 79152', () => {
    function mul(a, b) {
      return a * b;
    }
    assert.equal(make(17, 4)(97, 12)()(mul), 79152);
  });
  it('make()()(fn) => throw error', () => {
    function fn() {}
    assert.throws(() => make()()(fn), Error, 'No items');
  });
});
