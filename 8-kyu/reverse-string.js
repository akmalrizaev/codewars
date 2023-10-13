// Description:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let reversed = '';
      for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
      }
      return reversed;
  }
  
  
  console.log("world => ",solution('world'));  // Output: 'dlrow'
  console.log("word => ", solution('word'));   // Output: 'drow'
  

