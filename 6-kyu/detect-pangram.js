// Description:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanedStr = string.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Create a Set of unique characters in the cleaned string
  const uniqueChars = new Set(cleanedStr);

  // Check if there are 26 unique characters (A-Z)
  return uniqueChars.size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // Output: true
console.log(isPangram('Hello, world!')); // Output: false
