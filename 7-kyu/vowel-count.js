// Description:

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const vowels = 'aeiou'; 
    let count = 0; 
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase(); 
  
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }



  console.log(getCount("hello")); // Output: 2 (two vowels 'e' and 'o')
console.log(getCount("programming is fun")); // Output: 5 (five vowels 'o', 'a', 'i', 'i', and 'u')