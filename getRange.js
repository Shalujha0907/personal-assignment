const greaterThan = function (from, to) {
  return from > to;
};

const lessThan = function (from, to) {
  return from < to;
};

const getRange = function (from, to, step) {
  const range = [];
  const condition = from < to ? lessThan : greaterThan;

  if (step === 0) {
    return [];
  }

  for (let i = from; condition(i, to); i += step) {
    range.push(i);
  }

  return range;
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

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}


function testGetRange(from, to, step, expected) {
  const actual = getRange(from, to, step);
  const mark = getMark(expected, actual);

  console.log(mark, 'actual :', actual, 'expected :', expected);
}

function testAll() {
  testGetRange(0, 5, 1, [0, 1, 2, 3, 4]);
  testGetRange(0, 5, 2, [0, 2, 4]);
  testGetRange(5, 0, -1, [5, 4, 3, 2, 1]);
  testGetRange(5, 0, -2, [5, 3, 1]);
  testGetRange(5, 0, 0, []);
}

testAll();
