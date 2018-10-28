module.exports = function make(...init) {
  const numbers = [];

  return (function next(...args) {
    if (typeof args[0] !== 'function') {
      args.forEach(item => numbers.push(item));
      return next;
    }

    if (numbers.length) {
      return numbers.reduce(args[0]);
    }

    throw new Error('No items');
  }(...init));
};
