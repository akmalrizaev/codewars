// Description:

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071

// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  // Convert the number to an array of digits
  const digits = String(n).split('');

  // Find the first pair of digits from right to left where digits[i] < digits[i + 1]
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }

  // If no such pair is found, it means the number is the largest possible
  if (i === -1) {
    return -1;
  }

  // Find the smallest digit to the right of digits[i] that is larger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }

  // Swap digits[i] and digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Reverse the digits to the right of digits[i]
  const reversed = digits.splice(i + 1).reverse();

  // Concatenate the arrays and convert back to a number
  const result = parseInt(digits.concat(reversed).join(''), 10);

  return result;
}

console.log(nextBiggerNumber(12)); // Output: 21
console.log(nextBiggerNumber(513)); // Output: 531
console.log(nextBiggerNumber(2017)); // Output: 2071
console.log(nextBiggerNumber(9)); // Output: -1
console.log(nextBiggerNumber(111)); // Output: -1
console.log(nextBiggerNumber(531)); // Output: -1
