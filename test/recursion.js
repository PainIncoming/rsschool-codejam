const assert = require('assert');
const recursion = require('../src/recursion.js');

describe('recursion', () => {
  it('recursion(tree) => [[elems], [elems], [elems]]', () => {
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
  it('recursion(empty tree) => throw error', () => {
    assert.throws(() => recursion({}), Error, 'Invalid tree');
  });
});
