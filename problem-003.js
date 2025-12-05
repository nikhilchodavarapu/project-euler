// # Largest Prime Factor
// The prime factors of 13195 are 5,7,13 and 29.
// What is the largest prime factor of the number 600851475143?

const largestPrimeFactor = (num) => {
  let dividedNumber = num;
  for (let i = 2; i < dividedNumber; i++) {
    while (dividedNumber % i === 0) dividedNumber /= i;
  }
  return dividedNumber;
}

largestPrimeFactor(600851475143);