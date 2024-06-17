// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution

function solution(str) {
    let reversedStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]

    }
    return reversedStr
}


// Other Solutions

function solution(str) {
    return str.split('').reverse().join('');
}



let solution = str => [...str].reverse().join('');

function solution(str) {
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}