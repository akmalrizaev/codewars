Description:

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const repeatedChar = char.toUpperCase() + char.toLowerCase().repeat(i);
    result.push(repeatedChar);
  }
  return result.join('-');
}

console.log(accum("abcd"));    // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // Output: "C-Ww-Aaa-Tttt"

