// Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:



// Input
// The input file contains 3 integer values.

// Output
// Print the greatest of these three values followed by a space and the message “eh o maior”.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const calcMaior = (...lines) => {
    const [A, B, C] = input.split(" ").map(item => parseInt(item));
    const maiorAB = (A + B + Math.abs(A - B)) / 2;
    const maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;
    return maiorXC;
}

const maiorXC = calcMaior(...lines);

console.log(maiorXC + " eh o maior");
