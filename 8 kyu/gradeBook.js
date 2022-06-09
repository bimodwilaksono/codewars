//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  return average >= 90 && average <= 100
    ? "A"
    : average >= 80 && average < 90
    ? "B"
    : average >= 70 && average < 80
    ? "C"
    : average >= 60 && average < 70
    ? "D"
    : "F";
}

console.log(getGrade(30,100,100));