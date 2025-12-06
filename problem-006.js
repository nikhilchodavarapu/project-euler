// Sum Square Difference
// The sum of the squares of the first ten natural numbers is,
// 1²+2²+...+10²=385.
// The square of the sum of the first ten natural numbers is,
// (1+2+...+10)²=55²=3025.
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 −385 =2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDiff = (limit) => {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
    sumOfSquares += i * i;
  }
  const squareOfSums = sum ** 2;
  return squareOfSums - sumOfSquares;
}

sumSquareDiff(100)

// Optimized (Formula Based)

const sumSquareDiffOptimized = (n) => {
  const sum = (n * (n + 1)) / 2;
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  return sum * sum - sumOfSquares;
};

sumSquareDiffOptimized(100)