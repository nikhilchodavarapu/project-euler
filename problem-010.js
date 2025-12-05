// Summation Of Primes
// The sum of the primes below 10 is 2 +3 +5 +7 =17.
// Find the sum of all the primes below two million.

const isPrime = (num) => {
  const sqrtNum = num ** 0.5;
  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const summationOfPrimes = (limit) => {
  let sum = 0;
  let currentNumber = 2;
  let currentPrime = 2;
  while (currentNumber < limit) {
    if (isPrime(currentNumber)) {
      currentPrime = currentNumber;
      sum += currentPrime;
    }
    currentNumber++;
  }
  return sum;
}

summationOfPrimes(2000000)