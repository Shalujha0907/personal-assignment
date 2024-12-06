function binaryRepresentation(num) {
  if (num === 0) {
    return "0";
  }

  return binaryRepresentation(num >> 1) + (num & 1);
}

console.log("number in binary representation :", binaryRepresentation(0));
console.log("number in binary representation :", binaryRepresentation(1));
console.log("number in binary representation :", binaryRepresentation(2));
console.log("number in binary representation :", binaryRepresentation(3));
