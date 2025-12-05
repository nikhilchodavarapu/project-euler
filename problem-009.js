// Special Pythagorean Triplet
// A Pythagorean triplet is a set of three natural numbers, 𝑎 <𝑏 <𝑐, for which,
// 𝑎² + 𝑏² = 𝑐².
// For example, 3² + 4² = 9 + 16 = 25 = 5².
// There exists exactly one Pythagorean triplet for which 𝑎 +𝑏 +𝑐 =1000.
// Find the product 𝑎⁢𝑏⁢𝑐.

const specialPythagoeranTriplet = () => {
  for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      for (let c = 1; c < 1000; c++) {
        if ((a + b + c) === 1000 && (a ** 2 + b ** 2) === c ** 2) {
          return a * b * c;
        }
      }
    }
  }
};

specialPythagoeranTriplet()