// Description:

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  // Filter out non-zero elements and count the number of zeros
  const nonZeros = arr.filter((element) => element !== 0);
  const zeros = arr.length - nonZeros.length;

  // Append the zeros to the end of the non-zero elements
  return nonZeros.concat(Array(zeros).fill(0));
}

const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
console.log(result); // Output: [false, 1, 1, 2, 1, 3, "a", 0, 0]
