const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('sumOfOther([2, 3, 4, 1]) => [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('sumOfOther([]) => throw error', () => {
    assert.throws(() => sumOfOther([]), Error, 'Array is empty');
  });
});
