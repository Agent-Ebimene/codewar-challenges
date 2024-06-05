// My Solution
//Iniatilize a sum variable to keep track of sum. 
//Declare a variable to keep track of the array of positive numbers
// If the array passed to the function as an argument is empty, return 0
//Loop through the array
// Check if a number is greater than 0. If yes, add it to sum and push the number to the array declared above.
// if the array of positive numbers is empty, return 0.
// Return the value of sum.


// function positiveSum(arr) {
//     let sum = 0;
//     let positiveNos = []
//     if (!arr.length) return 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//             positiveNos.push(arr[i])
//         }
//     }
//     if (!positiveNos.length) {
//         return 0
//     }
//     return sum
// }



// Improved Solution

// const positiveSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }

console.log(positiveSum([-3, -4]))




// Other Solutions

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}