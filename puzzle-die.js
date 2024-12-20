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
  return number & 1 === 1;
}

function isLengthMoreThan5(element) {
  return element.length > 5;
}

function half(number) {
  return number >> 1;
}

function strIntoUppercase(element) {
  return element.toUpperCase();
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

const some = function (predicate, collection) {
  for (const element of collection) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
};

const every = function (predicate, collection) {
  for (const element of collection) {
    if (!predicate(element)) {
      return false;
    }
  }

  return true;
};

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

function testPuzzleDieMap(fnsName, helperFns, collection, expected, failed,
  init) {
  const actual = fnsName(helperFns, collection, init);
  if (!areEqual(actual, expected)) {
    failed.push([fnsName, helperFns, collection, expected, actual]);
  }
}

function testPuzzleDieFilter(fnsName, helperFns, collection, expected,
  failed) {
  const actual = fnsName(helperFns, collection);

  if (!areEqual(actual, expected)) {
    failed.push([fnsName, helperFns, collection, expected, actual]);
  }
}

function testPuzzleDieReduce(fnsName, helperFns, collection, init, expected,
  failed) {
  const actual = fnsName(helperFns, collection, init);

  if (actual !== expected) {
    failed.push([fnsName, helperFns, collection, actual, expected]);
  }
}

function testPuzzleDieSome(fnsName, helperFns, collection, expected,
  failed) {
  const actual = fnsName(helperFns, collection);

  if (actual !== expected) {
    failed.push([fnsName, helperFns, collection, actual, expected]);
  }
}

function testPuzzleDieEvery(fnsName, helperFns, collection, expected,
  failed) {
  const actual = fnsName(helperFns, collection);

  if (actual !== expected) {
    failed.push([fnsName, helperFns, collection, actual, expected]);
  }
}

function testAllMap(failed) {
  testPuzzleDieMap(map, Math.sqrt, [0], [0], failed);
  testPuzzleDieMap(map, Math.sqrt, [1, 4, 9, 16], [1, 2, 3, 4], failed);
  testPuzzleDieMap(map, Math.sqrt, [1, 2], [1, 1.4142135623730951], failed);
  testPuzzleDieMap(map, half, [0], [0], failed);
  testPuzzleDieMap(map, half, [1, 2, 3], [0, 1, 1], failed);
  testPuzzleDieMap(map, half, [4, 8, 10, 16], [2, 4, 5, 8], failed);
  testPuzzleDieMap(map, strIntoUppercase, ['a', 'b'], ['A', 'B'], failed);
  testPuzzleDieMap(map, strIntoUppercase, ['map', 'mapper'], ['MAP', 'MAPPER'],
    failed);
}

function testAllFilter(failed) {
  testPuzzleDieFilter(filter, isOdd, [4, 8, 10, 16], [], failed);
  testPuzzleDieFilter(filter, isOdd, [1, 8, 10, 16], [1], failed);
  testPuzzleDieFilter(filter, isOdd, [1, 8, 10, 4, 7], [1, 7], failed);
  testPuzzleDieFilter(filter, isLengthMoreThan5, ['abc', 'abcde', 'abcdef'],
    ['abcdef'], failed);
  testPuzzleDieFilter(filter, isLengthMoreThan5, ['shalu', 'jha',
    'shalujha'], ['shalujha'], failed);
  testPuzzleDieFilter(filter, isLengthMoreThan5, ['abc', 'abcde', ''],
    [], failed);
}

function testAllReduce(failed) {
  testPuzzleDieReduce(reduce, product, [1, 2, 3, 4], 1, 24, failed);
  testPuzzleDieReduce(reduce, counter, [1, 2, 3, 4], 0, 2, failed);
  testPuzzleDieReduce(reduce, concat, ['sh', 'alu'], '', 'shalu', failed);
  testPuzzleDieReduce(reduce, longestLength, ['a', 'ab', 'shalu'], 0, 'shalu',
    failed);
}

function testAllSome(failed) {
  testPuzzleDieSome(some, function (element) { return element & 1 === 1; },
    [1, 2], true, failed);
  testPuzzleDieSome(some, function (element) { return element & 1 === 1; },
    [2, 4, 8], false, failed);

  testPuzzleDieSome(some, function (element) { return element > 100; },
    [1, 2, 120], true);
  testPuzzleDieSome(some, function (element) { return element > 100; },
    [1, 2, 12], false);
}

function testAllEvery(failed) {
  testPuzzleDieEvery(every, function (element) { return element > 0; },
    [1, 2, 120], true, failed);
  testPuzzleDieEvery(every, function (element) { return element > 0; },
    [1, 2, -4], false, failed);

  testPuzzleDieEvery(every, function (element) { return element.length > 3; },
    ['that', 'this'], true, failed);
  testPuzzleDieEvery(every, function (element) { return element.length > 3; },
    ['that', 'thi'], false, failed);
}

function testAll(failed) {
  testAllMap(failed);
  testAllFilter(failed);
  testAllReduce(failed);
  testAllSome(failed);
  testAllEvery(failed);
}

function mainTest() {
  const failed = [];

  testAll(failed);

  console.table(failed);
}

mainTest();
