const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('sumOfOther([2, 3, 4, 1]) => [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('sumOfOther([15, 1, 5, 7, 8]) => [21, 35, 31, 29, 28]', () => {
    assert.deepEqual(sumOfOther([15, 1, 5, 7, 8]), [21, 35, 31, 29, 28]);
  });
  it('sumOfOther([]) => Array is empty', () => {
    assert.throws(() => sumOfOther([]), Error, 'Array is empty');
  });
});
