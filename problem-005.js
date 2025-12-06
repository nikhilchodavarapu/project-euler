// Smallest Mulltiple.
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = (limit, start = 1) => {
  let currentNumber = 1;
  let smallestPositiveMultiple = start;
  // let remainder = smallestPositiveMultiple % currentNumber;
  while (currentNumber <= limit) {
    if (smallestPositiveMultiple % currentNumber === 0) currentNumber++;
    else {
      currentNumber = 1;
      smallestPositiveMultiple++;
    }
  }
  return smallestPositiveMultiple;
}

smallestMultiple(20, 2520)

// Optimized One
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const smallestMultipleOptimized = (limit) => {
  let result = 1;
  for (let i = 1; i <= limit; i++) {
    result = (result * i) / gcd(result, i);
  }
  return result;
};

smallestMultipleOptimized(20);
