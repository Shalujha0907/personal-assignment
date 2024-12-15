const greaterThan = function (from, to) {
  return from > to;
};

const lessThan = function (from, to) {
  return from < to;
};

const getRange = function (from, to, step) {
  const range = [];
  const condition = from < to ? lessThan : greaterThan;

  for (let i = from; condition(i, to); i += step) {
    range.push(i);
  }

  return range;
};

console.log(getRange(0, 5, 1));
console.log(getRange(5, 0, -1));
console.log(getRange(5, 0, -2));
