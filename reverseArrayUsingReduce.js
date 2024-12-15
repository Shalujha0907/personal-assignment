const reverse = function (result, element) {
  result.unshift(element);
  return result;
}

const reverseOfArray = function (collection) {
  return collection.reduce(reverse, []);
}

console.log(reverseOfArray([1, 2, 3]));
console.log(reverseOfArray([1, 'shalu', 2, 'jha']));
