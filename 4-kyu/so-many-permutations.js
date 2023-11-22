// Description:

// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// Note: The order of the permutations doesn't matter.

// Good luck!

function permutations(string) {
    
    const result = [];
  
    function permute(current, remaining) {        

      if (remaining.length === 0) {
        result.push(current);
        
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {        

        const nextCurrent = current + remaining[i]; 

        const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);        

        permute(nextCurrent, nextRemaining);
      }
    }
  
    permute('', string);
    return [...new Set(result)]; // Remove duplicates using Set
  }

console.log(permutations('a'));      // ['a']
console.log(permutations('ab'));     // ['ab', 'ba']
console.log(permutations('abc'));    // ['abc','acb','bac','bca','cab','cba']
console.log(permutations('aabb'));   // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
