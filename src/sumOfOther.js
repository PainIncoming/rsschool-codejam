module.exports = function sumOfOther(arr) {
  if (!arr.length) throw new Error('Array is empty');

  const sumOfAll = arr.reduce((sum, curr) => sum + curr);

  return arr.map(item => sumOfAll - item);
};
