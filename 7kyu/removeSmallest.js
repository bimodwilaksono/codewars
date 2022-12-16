const removeSmallest = (numbers) => {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
};
console.log(removeSmallest([5, 3, 2, 1, 4]));
