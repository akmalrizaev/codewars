// Description:

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


function solution(input, markers) {
  
    // Split the input string into an array of lines
      const lines = input.split('\n');
      
      // Iterate through each line
      const result = lines.map(line => {
          // Find the index of the first occurrence of any marker
          const index = markers.reduce((minIndex, marker) => {
              const markerIndex = line.indexOf(marker);
              return (markerIndex !== -1 && (minIndex === -1 || markerIndex < minIndex)) ? markerIndex : minIndex;
          }, -1);
          
          // If a marker is found, return the substring before the marker, else return the entire line
          return (index !== -1) ? line.slice(0, index).trim() : line.trim();
      });
      
      // Join the lines to form the final result
      return result.join('\n');
    
  };

const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
console.log(result);