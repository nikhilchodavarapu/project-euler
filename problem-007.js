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