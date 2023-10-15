// Description:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    if (str.length < 2) {
       // If the string has less than two characters, return the original string.
       return str;
     }
   
     return str.slice(1, -1);
   
   };


   console.log(removeFirstAndLastCharacters("Hello"));  // Output: "ell"
console.log(removeFirstAndLastCharacters("A"));      // Output: "A"
console.log(removeFirstAndLastCharacters("12345"));  // Output: "234"
