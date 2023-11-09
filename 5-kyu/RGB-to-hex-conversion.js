// Description:

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    // Helper function to clamp a value between 0 and 255
  function clamp(value) {
    return Math.min(255, Math.max(0, value));
  }

  // Convert each value to a hexadecimal representation and pad with zeros
  const red = clamp(r).toString(16).padStart(2, '0');
  const green = clamp(g).toString(16).padStart(2, '0');
  const blue = clamp(b).toString(16).padStart(2, '0');

  // Concatenate the values to form the final hexadecimal representation
  return (red + green + blue).toUpperCase();
}

console.log(rgb(255, 255, 255));  // "FFFFFF"
console.log(rgb(255, 255, 300));  // "FFFFFF"
console.log(rgb(0, 0, 0));        // "000000"
console.log(rgb(148, 0, 211));    // "9400D3"

