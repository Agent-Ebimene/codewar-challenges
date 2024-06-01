// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.


// My Solution
// initialize a sum variable to add the sum
//Loop up to the number
//Check if the number is divisible by 3.If yes, add to sum.
//Check if the number is divisible by 5.If yes, add to sum.
//Check if the number is divisible by both 3 and 5. If yes, substract it from sum because it has been added to sum twice
//Return sum
function sumOfMultiplesOfThreeAndFive(number) {
    if (number < 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0) {
            sum += i;
        }
        if (i % 5 === 0) {
            sum += i;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            sum -= i;
        }
    }
    return sum;
}

console.log(sumOfMultiplesOfThreeAndFive(-23));