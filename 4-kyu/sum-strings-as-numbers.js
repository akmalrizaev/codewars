// Description:

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
  const sum = (BigInt(a) + BigInt(b)).toString();
  return sum;
}

// Another solution

// function sumStrings(a, b) {
//   let result = '';
//   let carry = 0;

//   // Pad the numbers with zeros to make them of equal length
//   while (a.length < b.length) {
//     a = '0' + a;
//   }
//   while (b.length < a.length) {
//     b = '0' + b;
//   }

//   // Iterate through the digits, starting from the least significant
//   for (let i = a.length - 1; i >= 0; i--) {
//     const digitA = parseInt(a[i]);
//     const digitB = parseInt(b[i]);

//     // Calculate the sum and carry for the current digits
//     const sum = digitA + digitB + carry;
//     result = (sum % 10) + result;
//     carry = Math.floor(sum / 10);
//   }

//   // If there's a carry left, add it to the front
//   if (carry > 0) {
//     result = carry + result;
//   }

//   // Remove leading zeros
//   result = result.replace(/^0+/, '');

//   return result || '0'; // Return "0" if the result is empty
// }
