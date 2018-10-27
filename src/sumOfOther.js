module.exports = function sumOfOther(arr) {
  const sumOfAll = arr.reduce((sum, curr) => sum + curr);

  return arr.map(item => sumOfAll - item);
};
