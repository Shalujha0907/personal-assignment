function counter(element, init) {
  return isOdd(element) ? init + 1 : init;
}

function longestLength(element, init) {
  return init.length > element.length ? init : element;
}

function concat(element, init) {
  return init + element;
}

function product(element, init) {
  return element * init;
}

function isOdd(number) {
  return number >> 1 === 1;
}

function isLengthMoreThan5(element) {
  return element.length > 5;
}

function half(number) {
  return number >> 1;
}

function map(mapper, collection) {
  const result = [];

  for (const element of collection) {
    result.push(mapper(element));
  }

  return result;
}

function filter(predicate, collection) {
  const result = [];

  for (const element of collection) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

function reduce(reducer, collection, initialValue) {
  let result = initialValue;

  for (const element of collection) {
    result = reducer(element, result);
  }

  return result;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testPuzzleDie(fnsName, helperFns, collection, expected, failed, init) {
  const actual = fnsName(helperFns, collection, init);
  if (!areEqual(actual, expected)) {
    failed.push([fnsName, helperFns, collection, expected, actual]);
  }
}

function testPuzzleDieReduce(fnsName, helperFns, collection, init, expected, failed) {
  const actual = fnsName(helperFns, collection, init);
  if (actual !== actual) {
    failed.push([fnsName, helperFns, collection, actual, actual]);
  }
}

function testAll(failed) {
  testPuzzleDie(map, Math.sqrt, [0], [0], failed);
  testPuzzleDie(map, Math.sqrt, [1, 4, 9, 16], [1, 2, 3, 4], failed);
  testPuzzleDie(map, Math.sqrt, [1, 2], [1, 1.4142135623730951], failed);

  testPuzzleDie(map, half, [0], [0], failed);
  testPuzzleDie(map, half, [1, 2, 3], [0, 1, 1], failed);
  testPuzzleDie(map, half, [4, 8, 10, 16], [2, 4, 5, 8], failed);
  testPuzzleDieReduce(reduce, product, [1, 2, 3, 4], 24, 1, failed);
  testPuzzleDieReduce(reduce, counter, [1, 2, 3, 4], 2, 0, failed);
  testPuzzleDieReduce(reduce, concat, ['sh', 'alu'], 'shalu', failed);
  testPuzzleDieReduce(reduce, longestLength, ['a', 'ab', 'shalu'], 'shalu',
    failed, 0);
}

function mainTest() {
  const failed = [];

  testAll(failed);

  console.table(failed);
}

mainTest();
