// Multiples Of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiplesOf3And5 = (limit) => {
  let sum = 0
  for (let i = 1; i < limit; i++) {
    sum += i % 3 === 0 || i % 5 === 0 ? i : 0;
  }
  return sum;
}

sumOfMultiplesOf3And5(1000)