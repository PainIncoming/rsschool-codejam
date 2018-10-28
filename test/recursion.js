const assert = require('assert');
const recursion = require('../src/recursion.js');

describe('recursion', () => {
  it('recursion(tree) => [[nodes], [nodes], [nodes], ...]', () => {
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
  it('recursion(tree) => [[nodes], [nodes], [nodes], ...]', () => {
    const tree = {
      value: 97,
      left: {
        value: 75,
        left: {
          value: 70,
        },
      },
      right: {
        value: 11,
        right: {
          value: 13,
          left: {
            value: 5,
            left: {
              value: 45,
            },
          },
          right: {
            value: 17,
            left: {
              value: 100,
            },
            right: {
              value: 33,
            },
          },
        },
      },
    };

    assert.deepEqual(recursion(tree), [[97], [75, 11], [70, 13], [5, 17], [45, 100, 33]]);
  });
  it('recursion() => Need more tree!', () => {
    assert.throws(() => recursion(), Error, 'Need more tree!');
  });
});
