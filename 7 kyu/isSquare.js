const isSquare = (n) => {
  return n >= 0 ? Number.isInteger(Math.sqrt(n)) : false; // fix me
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(25));
console.log(isSquare(14));
