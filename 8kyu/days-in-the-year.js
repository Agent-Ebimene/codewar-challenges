// A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example:

// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.


// My Solution
// Century years are years ending with two zeros: 1600,1000,2000,3000,200,300,400 etc

// const yearDays = (year) => {
//     const yearToCheck = parseInt(year);
//     return yearToCheck % 100 === 0 ? yearToCheck % 400 === 0 ? `${yearToCheck} has 366 days` : `${yearToCheck} has 365 days` : yearToCheck % 4 === 0 ? `${yearToCheck} has 366 days` : `${yearToCheck} has 365 days`

// }


// Other Solutions 

// function yearDays(year) {
//     var result = 365;
//     // if divisible by 400 or divisible by 4 and not divisible by 100(Not century years)
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
//         result = 366;
//     }

//     return year + ' has ' + result + ' days';
// }


// I am personally excited by this solution
function yearDays(year) {
    const isCentury = year % 100 === 0;
    const isLeap = year % (isCentury ? 400 : 4) === 0;
    const days = isLeap ? 366 : 365;
    return `${year} has ${days} days`;
}

// Another Lovely solution
function yearDays(year) {
    return `${year} has ${(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? 366 : 365} days`;
}

console.log(yearDays(2016))


