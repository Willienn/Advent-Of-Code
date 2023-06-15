import * as fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\r\n').map(str => str.trim());

function day3part1() {

    const commandArray = [];
    inputArray.forEach(input => {
        const index = input.length / 2;
        const [firstPart, secondPart] = [input.slice(0, index), input.slice(index)];

        let commonChar = '';
        for (const char1 of firstPart) {
            if (secondPart.includes(char1)) {
                commonChar = char1;
                break;
            }
        }
        commandArray.push(commonChar);

    });

    let commonCharValue = 0;
    commandArray.forEach(char => {
        const a = getCharValue(char)
        commonCharValue += a;
    })
    return commonCharValue;
}

const day3 = day3part1();

function day3part2() {
    let groupArray = [];
    for (let i = 0; i < 100; i++) {
        groupArray.push(inputArray.splice(0, 3));
    }
    const commandArray = [];
    groupArray.forEach(group => {
        const [start, midle, end] = [group[0], group[1], group[2]];
        const biggerString = findLongestString(start, midle, end);
        let commonChar = '';
        for (const char of biggerString) {
            if (midle.indexOf(char) !== -1 && start.indexOf(char) !== -1 && end.indexOf(char) !== -1) {
                commonChar = char;
                break;
            }
        }
        commandArray.push(commonChar);

    });
    let commonCharValue = 0;
    commandArray.forEach(char => {
        const a = getCharValue(char)
        commonCharValue += a;
    })
    return commonCharValue;
}

const day3part_2 = day3part2();
console.log(day3part_2);

function getCharValue(char) {
    const charCode = char.charCodeAt(0);
    if (char >= 'a' && char <= 'z') {
        return charCode - 96; // 'a' is 97, so subtracting 96 gives values from 1 to 26
    } else if (char >= 'A' && char <= 'Z') {
        return charCode - 38; // 'A' is 65, so subtracting 38 gives values from 27 to 52
    } else {
        return 0; // Non-alphabetic characters have a value of 0
    }
}

function findLongestString(string1, string2, string3) {
    const maxLength = Math.max(string1.length, string2.length, string3.length);

    if (maxLength === string1.length) {
        return string1;
    } else if (maxLength === string2.length) {
        return string2;
    } else {
        return string3;
    }
}
