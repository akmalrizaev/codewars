function generateHashtag(str) {
  // Check if the input string is empty or consists only of spaces
  if (!str || /^\s*$/.test(str)) {
    return false;
  }

  // Remove leading and trailing spaces, then split the string into words
  const words = str.trim().split(/\s+/);

  // Capitalize the first letter of each word and join them
  const hashtag = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Check if the resulting hashtag is longer than 140 characters
  if (hashtag.length > 140) {
    return false;
  }

  // Check if the final word is longer than 140 characters
  if (words[words.length - 1].length > 139) {
    return false;
  }

  // Add the '#' symbol to the beginning of the hashtag
  return `#${hashtag}`;
}

console.log(generateHashtag(' Hello there thanks for trying my Kata')); // "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag('    Hello     World   ')); // "#HelloWorld"
console.log(generateHashtag('')); // false
console.log(generateHashtag('a'.repeat(140)));
