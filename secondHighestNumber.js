const getWinnerRunnerUp = function ([highest, secondHighest], number) {
  if (number > highest) {
    secondHighest = highest;
    highest = number;
  }

  if (number > secondHighest && highest > number) {
    secondHighest = number;
  }

  return [highest, secondHighest];
};

function validCollection(collection) {
  return collection.length > 1;
}

function secondHighest(collection, [highest, secondHighest]) {
  if (validCollection(collection)) {
    const result = collection.reduce(getWinnerRunnerUp, [highest, secondHighest]);

    return result[1];
  }

  return collection[0];
}

function getMark(expected, actual) {
  return actual === expected ? '✅' : '❌';
}

function testSecondHighest(collection, initArray, expected) {
  const actual = secondHighest(collection, initArray);
  const mark = getMark(expected, actual);

  console.log(mark, 'actual :', actual, 'expected :', expected);
}

function testAll() {
  testSecondHighest([4, 3, 2, 1], [-Infinity, -Infinity], 3);
  testSecondHighest([1, 2, 3, 4], [-Infinity, -Infinity], 3);
  testSecondHighest([1, 2, 6, 4], [-Infinity, -Infinity], 4);
  testSecondHighest([1, 2, 5], [-Infinity, -Infinity], 2);
  testSecondHighest([8, 2, 5], [-Infinity, -Infinity], 5);
  testSecondHighest([-1, -2, -3], [-Infinity, -Infinity], -2);
  testSecondHighest([0, -1, -3], [-Infinity, -Infinity], -1);
  testSecondHighest([8, 8, 8], [-Infinity, -Infinity], -Infinity);
  testSecondHighest([-1], [-Infinity, -Infinity], -1);
}

testAll();
