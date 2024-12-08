const fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    matches = [...data.matchAll(/mul\(\d*,\d*\)/gm)]

    const result = matches
        .map(match => match[0])
        .map(mul => {
            const [p1, p2] = mul.split(',')
            const p1Digit = p1.replaceAll(/[^0-9]/g, '')
            const p2Digit = p2.replaceAll(/[^0-9]/g, '')


            return parseInt(p1Digit) * parseInt(p2Digit)
        } ).reduce((a, b) => a + b, 0)

    console.log(result)
})