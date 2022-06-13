const descendingOrder = (n) =>
  String(n).split("").sort().reverse().join("") * 1;

console.log(descendingOrder(123454543));
