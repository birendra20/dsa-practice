/*
Given an array A of size N of integers. Your task is to find the sum of minimum and maximum element in the array.
Input:
N = 5
A[] = {-2, 1, -4, 5, 3}
Output: 1
Explanation: min = -4, max =  5. Sum = -4 + 5 = 1
*/

//first solution

let A = [1, 3, 4, 1];
/* 
function findSum(A, N) {
 
  let min = Infinity;
  let max = -Infinity;
  let sum;
  for (let i = 0; i < N; i++) {
    if (A[i] < min) {
      min = A[i];
    }

    if (A[i] > max) {
      max = A[i];
    }
  }
  sum = min + max;
  return sum;
}

console.log(findSum(A, A.length));

*/

/*
T.C = O(N)
S.C = O(1)

*/

//second solution

/*

function findSum(A) {
  let min = Math.min(...A);
  let max = Math.max(...A);

  return max + min;
}
console.log(findSum(A));
T.C = O(N)
S.C = O(1)

*/

function findSum(A) {
  let minMax = A.reduce(
    (a, b) => [Math.min(a[0], b), Math.max(a[1], b)],
    [Infinity, -Infinity]
  );
  return minMax[0] + minMax[1];
}
console.log(findSum(A));
