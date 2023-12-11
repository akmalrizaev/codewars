// Description:

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes

//     The input numbers are big.
//     The input is a string of only digits
//     The numbers are positives

function add(a, b) {
  // Pad the shorter string with zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let carry = 0;
  let result = '';

  for (let i = maxLength - 1; i >= 0; i--) {
    const digit1 = parseInt(a[i]);
    const digit2 = parseInt(b[i]);

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);

    result = (sum % 10) + result;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;

  //return (Number(a) + Number(b)).toString(); // Fix me!
}
