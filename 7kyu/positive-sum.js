// My Solution
//Loop through the array
// Check if a number is greater than 0. If yes, add it to sum


function positiveSum(arr) {
    let sum = 0;
    let positiveNos = []
    if (!arr.length) return 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
            positiveNos.push(arr[i])
        }
    }
    if (!positiveNos.length) {
        return 0
    }
    return sum
}

console.log(positiveSum([]))

