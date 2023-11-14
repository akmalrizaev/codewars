// Description:

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


function firstNonRepeatingLetter(s) {
  
    // Convert the string to lowercase for case-insensitive comparison
    const lowercaseString = s.toLowerCase();
  
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      // Check if the current character is the first non-repeating character
      if (
        lowercaseString.indexOf(currentChar.toLowerCase()) ===
        lowercaseString.lastIndexOf(currentChar.toLowerCase())
      ) {
        return currentChar;
      }
    }
  
    // If no non-repeating character is found, return an empty string
    return "";
  }

console.log(firstNonRepeatingLetter("stress")); // Should return 't'
console.log(firstNonRepeatingLetter("sTreSS")); // Should return 'T'