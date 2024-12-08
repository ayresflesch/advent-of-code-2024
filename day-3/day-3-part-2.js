const fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    matches = [...data.matchAll(/(mul\(\d*,\d*\))|(don't\(\))|(do\(\))/gm)]

    let isDo = true;

    const commands = matches.map(match => match[0])

    const multiplications = []
    for (let i in commands) {
        const command = commands[i]

        if (command == 'do()') {
            isDo = true
            continue;
        } else if (command == "don't()") {
            isDo = false
            continue;
        }

        if (!isDo) {
            continue;
        }

        const [p1, p2] = command.split(',')
        const p1Digit = p1.replaceAll(/[^0-9]/g, '')
        const p2Digit = p2.replaceAll(/[^0-9]/g, '')

        multiplications.push(parseInt(p1Digit) * parseInt(p2Digit))
    }

    console.log(multiplications.reduce((a, b) => a + b, 0))
})