const highAndLow = (numbers) =>
  `${Math.max(
    ...numbers.split(" ").sort()
  )} ${Math.min(...numbers.split(" ").sort())}`;

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 2 3 4 -5"));
