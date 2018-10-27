module.exports = function make(...init) {
  const numbers = [];
  const next = (...args) => {
    if (typeof args[0] !== 'function') {
      args.forEach(item => numbers.push(item));
      return next;
    }

    return numbers.reduce(args[0], 0);
  };

  return next(...init);
};
