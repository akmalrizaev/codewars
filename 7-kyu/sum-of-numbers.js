// Description:

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

function getSum(a, b) {
  if (a === b) {
    return a; // Return either a or b if they are equal.
  }

  const [start, end] = [a, b].sort((x, y) => x - y); // Sort a and b in ascending order.
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(1, 5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
console.log(getSum(-2, 2)); // Output: 0 (-2 + -1 + 0 + 1 + 2 = 0)
console.log(getSum(3, 3)); // Output: 3 (Both a and b are equal, so return 3)
