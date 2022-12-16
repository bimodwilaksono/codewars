const squareDigits = (num) =>
  num
    .toString()
    .split("")
    .map((el) => Math.pow(el, 2))
    .join("") * 1;
console.log(typeof squareDigits(91));
