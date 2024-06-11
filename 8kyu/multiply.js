// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b

//    }

// Simply return the result of the multiplication

// function multiply(a, b) {
//     return a * b;
// }


// // Some opther elegant solutions by others:

// function multiply(a, b) {
//     if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
//         return 0;
//     }
//     return a * b;
// }

function multiply(a, b) {

    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        return 'Please eneter two valid numbers'
    }
}
console.log(multiply('y', 9))
