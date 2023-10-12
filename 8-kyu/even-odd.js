// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function Even_Odd(a) {
    if (Math.abs(a % 2) > 0) {
        return "Odd";
    } 
    return "Even"
    }
    


console.log(Even_Odd(0));
console.log(Even_Odd(1));
console.log(Even_Odd(2));
console.log(Even_Odd(0));
console.log(Even_Odd(-1));
console.log(Even_Odd(-2));