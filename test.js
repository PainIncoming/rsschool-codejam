const assert = require('assert');

const recursion = require('./src/recursion.js');
const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');

it('sumOfOther', () => {
  assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
});

it('make', () => {
  function sum(a, b) {
    return a + b;
  }
  assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
});

it('recursion', () => {
  const tree = {
    value: 100,
    left: {
      value: 90,
      left: {
        value: 70,
      },
      right: {
        value: 99,
      },
    },
    right: {
      value: 120,
      left: {
        value: 110,
      },
      right: {
        value: 130,
      },
    },
  };
  assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
});
