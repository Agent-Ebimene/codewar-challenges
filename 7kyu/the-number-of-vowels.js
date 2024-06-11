function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase()
    let count = 0;
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            console.log(`Vowel ${lowerStr[i]}`)
            count++
        }
    }
    return count;
}

console.log(getCount('Agent'))

// let sentence = 'We are coming there'
// console.log(`${sentence.split(',')}`)