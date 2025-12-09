// Longest Collatz Sequence.

// The following iterative sequence is defined for the set of positive integers:

// 𝑛 →𝑛/2 (𝑛 is even)
// 𝑛 →3⁢𝑛 +1 (𝑛 is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13→40→20→10→5→16→8→4→2→1.

// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

const getNextTerm = (num) => {
  return num % 2 === 0 ? num / 2 : 3 * num + 1;
}

const longestCollatzSequence = (limit) => {
  const terms = {1:1};
  let longest = -Infinity;
  let num = 1;
  for (let i = 2; i < limit; i++) {
    let count = 1;
    let nextTerm = getNextTerm(i)
    while (terms[nextTerm] === undefined) {
      nextTerm = getNextTerm(nextTerm);
      count++;
    }
    terms[i] = count + terms[nextTerm];
    if (longest < terms[i]) {
      longest = terms[i];
      num = i;
    }
  }
  return num;
}

console.log(longestCollatzSequence(1000000))