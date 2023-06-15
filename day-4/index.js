import * as fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\r\n').map(str => str.trim().split(",").map(input => input.split("-").map(str => parseInt(str))));
const start = 0
const end = 1

function part1() {
    let count = 0;
    inputArray.forEach(input => {
        const [group1, group2] = input;
        if (group1[start] && group2[start]) {
            if (group1[start] <= group2[start] && group1[end] >= group2[end]) {
                count++;
            } else if (group2[start] <= group1[start] && group2[end] >= group1[end]) {
                count++;
            } else {
            }
        }
    })
    return count
}

function part2() {
    let count = 0;
    inputArray.forEach(input => {
        const [group1, group2] = input;
        if (group1[start] && group2[start]) {
            switch (true) {
                case (group1[start] <= group2[start] && group1[end] >= group2[end]) :
                    count++;
                    break;
                case (group1[start] >= group2[start] && group1[end] <= group2[end]):
                    count++;
                    break;
                case (group1[start] <= group2[start] && group1[end] >= group2[start]):
                    count++;
                    break;
                case (group1[start] <= group2[end] && group1[end] >= group2[end]):
                    count++;
                    break;
                default:
            }

        }
    })
    return count
}
console.log(`Day 4 `+`\r\n`+`part 1: ${part1()}`+`\r\n`+`part 2: ${part2()}`)
