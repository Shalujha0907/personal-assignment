function toBinary(num) {
  if (num === 0) {
    return "0";
  }

  return toBinary(num >> 1) + (num & 1);
}

console.log("number in binary representation :", toBinary(0));
console.log("number in binary representation :", toBinary(1));
console.log("number in binary representation :", toBinary(2));
console.log("number in binary representation :", toBinary(3));
