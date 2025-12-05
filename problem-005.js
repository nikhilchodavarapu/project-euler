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