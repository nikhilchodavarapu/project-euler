// Largest Palindrome Product.
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (num) =>
  (num + "") === (num + "").split("").reverse().join("");

const largestPalindromeProduct = (digits) => {
  const max = 10 ** digits - 1;
  const min = 10 ** (digits - 1);
  let maxPalindrome = -Infinity;
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      const product = i * j;
      if (isPalindrome(product) && product > maxPalindrome) {
        maxPalindrome = product;
      }
    }
  }
  return maxPalindrome;
};

largestPalindromeProduct(3);


// Optimized One

const largestPalindromeProductOptimized = (digits) => {
  const max = 10 ** digits - 1;
  const min = 10 ** (digits - 1);
  let maxPalindrome = 0;

  for (let i = max; i >= min; i--) {
    // If i * max < current best, break early
    if (i * max < maxPalindrome) break;

    for (let j = i; j >= min; j--) { // j starts from i (avoid duplicates)
      const product = i * j;

      // If product < current best, break inner loop
      if (product < maxPalindrome) break;

      if (isPalindrome(product)) {
        maxPalindrome = product;
        break; // no need to check smaller j for this i
      }
    }
  }

  return maxPalindrome;
};

largestPalindromeProductOptimized(3)