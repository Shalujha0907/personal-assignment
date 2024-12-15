const greaterThan = function (array, number) {     
  if (number > array[0]) {                
    array[1] = array[0];                           
    array[0] = number;                           
  } 

  if (number > array[1] && array[0] > number) {  
    array[1] = number;      
  }

  return array; 
}

function getSecondHighest(collection, array) {
  let result = [];
  result = collection.reduce(greaterThan, array);
  
  return result[1];
}

console.log(getSecondHighest([4, 3, 2, 1], [0, 0])) ;
console.log(getSecondHighest([1, 2, 3, 4], [0, 0]));
console.log(getSecondHighest([1, 2, 4, 3], [0, 0]));
console.log(getSecondHighest([1, 2, 5], [0, 0])); 
console.log(getSecondHighest([8, 2, 5], [0, 0])); 
