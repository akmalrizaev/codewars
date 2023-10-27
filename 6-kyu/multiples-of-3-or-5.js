// Description:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number) {
  if (number < 0) {
    return 0; // Return 0 for negative numbers.
  }

  let sum = 0;

  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i; // Add multiples of 3 or 5 to the sum.
    }
  }

  return sum;
}

console.log(solution(10)); // Output: 23
console.log(solution(20)); // Output: 78
console.log(solution(-5)); // Output: 0
