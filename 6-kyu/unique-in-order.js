// Description:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  if (!iterable.length) return [];

  const result = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Output: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // Output: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // Output: [1, 2, 3]
