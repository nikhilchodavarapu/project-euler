// 10001st Prime Number
// By listing the first six prime numbers: 2,3,5,7,11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const isPrime = (num) => {
  const sqrtNum = num ** 0.5;
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const nthPrimeNumber = (n) => {
  let primeNumberCount = 0;
  let i = 2;
  while (primeNumberCount < n) {
    if (isPrime(i)) primeNumberCount++;
    i++;
  }
  return i - 1;
}

nthPrimeNumber(10001)

// Optimised one 
const isPrimeOptimised = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 !== 1) return false; // even numbers > 2 are not prime

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const nthPrimeNumberOptimised = (n) => {
  if (n === 1) return 2;

  let count = 1; // prime #1 is 2
  let candidate = 3; // start checking only odd numbers

  while (count < n) {
    if (isPrimeOptimised(candidate)) count++;
    candidate += 2; // skip even numbers
  }

  return candidate - 2; // last prime found
};


nthPrimeNumberOptimised(10001)