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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let scoresMax = scores[0]
    let scoresMin = scores[0]
    let countMax = 0
    let countMin = 0
    for (let i = 0; i < scores.length; i++) {
        if (scoresMax < scores[i]) {
            scoresMax = scores[i]
            countMax +=1
        }
        if (scoresMin > scores[i]) {
            scoresMin = scores[i]
            countMin += 1
        }
    }
    const arrMaxMin = []
    arrMaxMin.push(countMax, countMin)
    return arrMaxMin

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH ?? "output.txt");

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
