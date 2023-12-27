'use strict';

const fs = require('fs');

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

function timeConversion(s) {
    // Write your code here
    const split_s = s.split(":")
    const split_s2 = split_s[2].split('')
    let timeConv = []

    if (split_s2[2] == 'P') {
        let split_s0int = parseInt(split_s[0])
        split_s0int +=12
        const split_s0str = split_s0int.toString()
        timeConv.push(split_s0str, ':', split_s[1], ':', split_s2[0], split_s2[1])
        const timeConvStr = timeConv.join()
        return timeConvStr
    } else {
        timeConv.push(split_s[0], ':', split_s[1], ':', split_s2[0], split_s2[1])
        const timeConvStr = timeConv.join()
        return timeConvStr
    }
}

function main() {
    
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s =readLine();

    const result = timeConversion(s)

    ws.write(result + '\n');

    ws.end();

}
