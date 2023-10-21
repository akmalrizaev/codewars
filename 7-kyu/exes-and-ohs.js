// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  
    const lowerStr = str.toLowerCase();
    
    const xCount = (lowerStr.match(/x/g) || []).length;
    const oCount = (lowerStr.match(/o/g) || []).length;
  
    return xCount === oCount;
  }


console.log(XO("ooxx"));    // Output: true
console.log(XO("xooxx"));   // Output: false
console.log(XO("ooxXm"));   // Output: true
console.log(XO("zpzpzpp")); // Output: true
console.log(XO("zzoo"));    // Output: false