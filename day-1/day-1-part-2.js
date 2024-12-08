const fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    const splitByColumn = data.split(/\r?\n/).map(line => line.split(/\s+/));
    const firstColumn = splitByColumn.map(a => parseInt(a[0]))
    const secondColumn = splitByColumn.map(a => parseInt(a[1]))

    const groupedByNumber = secondColumn.reduce((acc, number) => {
        acc[number] = acc[number] == null ? 1 : acc[number] + 1

        return acc
    }, {})

    let result = 0
    firstColumn.forEach(number => {
        result += number * (groupedByNumber[number] || 0)
    });

    console.log(result);
})