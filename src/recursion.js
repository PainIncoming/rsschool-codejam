module.exports = function recursion(tree) {
  if (!tree) throw new Error('Need more tree!');

  return (function getChilds(...args) {
    const result = [];
    const nextArgs = [];

    args.forEach((item) => {
      result.push(item.value);

      if (item.left) nextArgs.push(item.left);
      if (item.right) nextArgs.push(item.right);
    });

    if (nextArgs.length) return [result].concat(getChilds(...nextArgs));

    return [result];
  }(tree));
};
