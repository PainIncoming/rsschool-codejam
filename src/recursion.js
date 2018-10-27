module.exports = function recursion(tree) {
  if (!Object.keys(tree).length) throw new Error('Invalid tree');

  return [];
};
