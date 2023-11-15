// Description:

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  
    const charCount = {};
  
      // Count characters in str1
      for (const char of str1) {
          charCount[char] = (charCount[char] || 0) + 1;
      }
  
      // Check if str2 can be formed from str1
      for (const char of str2) {
          if (!charCount[char]) {
              return false;
          }
          charCount[char]--;
      }
  
      return true;
  }

console.log(scramble('rkqodlw', 'world')); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak')); // false

