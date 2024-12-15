const getRange = function (from, to, step) {
  const range = [];

  for (let i = from; i < to; i += step) {
    range.push(i);
  }

  return range;
};

const last2ElementOfFiboSeries = function (initArray) {
  const result = initArray[0] + initArray[1];

  initArray[0] = initArray[1];
  initArray[1] = result;

  return initArray;
};

const NthFibo = function (collection, initArray) {
  collection.reduce(last2ElementOfFiboSeries, initArray);

  return initArray[1];
};

console.log('actual ; ', NthFibo(getRange(0, 1, 1), [-1, 1]), 'expected : 0');
console.log('actual ; ', NthFibo(getRange(0, 2, 1), [-1, 1]), 'expected : 1');
console.log('actual ; ', NthFibo(getRange(0, 3, 1), [-1, 1]), 'expected : 1');
console.log('actual ; ', NthFibo(getRange(0, 4, 1), [-1, 1]), 'expected : 2');
console.log('actual ; ', NthFibo(getRange(0, 5, 1), [-1, 1]), 'expected : 3');
