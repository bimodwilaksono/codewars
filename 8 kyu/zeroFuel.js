const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump > (mpg * fuelLeft) ? false : true;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
console.log(1700%100);