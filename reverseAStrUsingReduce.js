const concat = function (init, element) {
  return element + init;
}

const reverseOfStr = function (string) {
  const array = [];
  array.push(...string);

  return array.reduce(concat, '');
};

console.log(reverseOfStr('ulahs'));
console.log(reverseOfStr('ahj ulahs'));
console.log(reverseOfStr('shalu jha'));
