// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(a) {
    if (Math.abs(a % 2) > 0) {
        return "Odd";
    } 
    return "Even"
    }
    


console.log(evenOrOdd(0));
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(0));
console.log(evenOrOdd(-1));
console.log(evenOrOdd(-2));