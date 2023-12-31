// Description:

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  const charCount = {};
  const result = [];

  for (const char of word.toLowerCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of word.toLowerCase()) {
    if (charCount[char] > 1) {
      result.push(')');
    } else {
      result.push('(');
    }
  }

  return result.join('');
}

console.log(duplicateEncode('din')); // Output: "((("
console.log(duplicateEncode('recede')); // Output: "()()()"
console.log(duplicateEncode('Success')); // Output: ")())())"
console.log(duplicateEncode('(( @')); // Output: "))(("
