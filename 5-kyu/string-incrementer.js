// Description:

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
 
    // Match the number at the end of the string (if any)
      const match = strng.match(/\d*$/);
  
      if (match) {
          let num = (parseInt(match[0]) || 0) + 1;
          
        // Use slice to get the string part before the number
          const strPart = strng.slice(0, match.index);
         
        // Use padStart to add leading zeros if necessary
          const numPart = num.toString().padStart(match[0].length, '0');
          return strPart + numPart;
      } else {
          // If no number found, append '1'
          return strng + '1';
      }
  }


  console.log(incrementString("foo"));      // foo1
console.log(incrementString("foobar23")); // foobar24
console.log(incrementString("foo0042"));  // foo0043
console.log(incrementString("foo9"));     // foo10
console.log(incrementString("foo099"));   // foo100