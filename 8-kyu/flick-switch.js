// Description:
// Task

// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes

//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.




function flickSwitch(arr) {
    let shouldToggle = true; 
    
    
    return arr.map((element) => {
      if (element === 'flick') {
        shouldToggle = !shouldToggle; 
      }
      return shouldToggle; 
    });
  }
  
  
  console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));  // Output: [true, false, false, false]
  console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));  // Output: [false, false, false, false]
  console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));  // Output: [true, true, false, false, true]
  