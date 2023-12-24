'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0
    let countZero = 0
    let negativeCount = 0
    for(let i=0; i<arr.length; i++){
        if (arr[i] > 0) {
            positiveCount += 1
        }
        else if (arr[i] < 0) {
            negativeCount += 1
        }
        else {
            countZero += 1
        }
    }
    const positiveRatio = positiveCount/arr.length
    const negativeRatio = negativeCount/arr.length
    const zeroRatio = countZero/arr.length
    
    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
    
    //console.log(arr)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
