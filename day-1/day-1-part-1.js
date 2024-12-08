const fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    const splitByColumn = data.split(/\r?\n/).map(line => line.split(/\s+/));
    const firstColumn = splitByColumn.map(a => parseInt(a[0])).sort()
    const secondColumn = splitByColumn.map(a => parseInt(a[1])).sort()


    let response = 0

    for (let i = 0; i < firstColumn.length; i++) {
        const firstColumnEl = firstColumn[i];
        const secondColumnEl = secondColumn[i];

        response += Math.abs(firstColumnEl - secondColumnEl)
        
    }

    console.log(response);
})