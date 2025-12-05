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
