const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const areEqual = function (array1, array2) {
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

function testAll([funsName, parameters, expected]) {
  const failed = [];
  const actual = funsName(parameters[0], parameters[1]);
  
  if (actual !== expected) {
    failed.push([funsName, parameters, expected, actual]);
    console.table(failed);
  }
}

function allTestCases() {
  testAll([add, [2, 3], 5]);
  testAll([add, [0, 3], 5]);
  testAll([sub, [0, 2], 4]);
  testAll([areEqual, [[1, 2], [1, 3]], false]);
  testAll([areEqual, [[1, 2], [1, 3]], true]);
}

allTestCases();
