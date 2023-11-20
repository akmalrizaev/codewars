// Description:
// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
  
    const result = [];
  
    while (array.length) {
      // Move from left to right
      result.push(...array.shift());
  
      // Move from top to bottom
      for (let i = 0; i < array.length; i++) {
        result.push(array[i].pop());
      }
  
      // Move from right to left, but in reverse order
      if (array.length) {
        result.push(...array.pop().reverse());
      }
  
      // Move from bottom to top, but in reverse order
      for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i].shift());
      }
    }
  
    return result;
    
  }

  const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(snail(array1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  
  const array2 = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ];
  console.log(snail(array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  