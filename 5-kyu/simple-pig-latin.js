// Description:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  // Split the input string into words
  const words = str.split(' ');

  // Define a function to perform Pig Latin transformation on a word
  const pigLatinWord = (word) => {
    if (/^[A-Za-z]+$/.test(word)) {
      // Check if the word contains only letters
      const firstLetter = word[0];
      const restOfWord = word.slice(1);
      return restOfWord + firstLetter + 'ay';
    } else {
      return word; // Preserve punctuation marks
    }
  };

  // Apply Pig Latin transformation to each word
  const pigLatinWords = words.map(pigLatinWord);

  // Join the transformed words back into a string
  return pigLatinWords.join(' ');
}

const result1 = pigIt('Pig latin is cool'); // Output: "igPay atinlay siay oolcay"
const result2 = pigIt('Hello world !'); // Output: "elloHay orldway !"
console.log(result1);
console.log(result2);
