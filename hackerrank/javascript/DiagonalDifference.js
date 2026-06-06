/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Diagonal Difference
Link: https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

*/

function diagonalDifference(arr) {
  let diagonalpertama = 0;
  let diagonalkedua = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonalpertama += arr[i][i];
    diagonalkedua += arr[i][arr.length - 1 - i];
  }

  return (arr = Math.abs(diagonalpertama - diagonalkedua));
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]),
);
