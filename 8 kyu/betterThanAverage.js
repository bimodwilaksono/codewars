// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   const allPoints = [...classPoints,yourPoints];
//   const average = allPoints.reduce((cumm,curr) => cumm+curr, 0) / allPoints.length
//   return (yourPoints > average) ? true : false
//   }

const betterThanAverage = (classPoints, yourPoints) => {
  return (
    yourPoints >
    [...classPoints, yourPoints].reduce((cumm, curr) => cumm + curr, 0) /
      [...classPoints, yourPoints].length
  );
};

// console.log(average);

console.log(betterThanAverage([3, 2], 5));
