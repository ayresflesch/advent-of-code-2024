const fs = require('fs');

fs.readFile('input.txt', 'utf-8', function (err, data) {
    const matrix = data.split(/\r?\n/).map(line => line.split(''));

    const numRows = matrix.length
    const numCols = matrix[0].length

    const xPos = []
    for (let row = 0; row < numRows; row++) {
        const numCols = matrix[row].length

        for (let col = 0; col < numCols; col++) {
            if (matrix[row][col] === 'X') {
                xPos.push([row, col])
            }
        }
    }

    let count = 0

    for (let i = 0; i < xPos.length; i++) {
        const [row, col] = xPos[i];

        let leftWord = ''
        let rightWord = ''
        let upWord = ''
        let downWord = ''
        let leftUpWord = ''
        let rightUpWord = ''
        let leftDownWord = ''
        let rightDownWord = ''

        for (let j = 1; j <= 3; j++) {
            leftWord += matrix[row][col - j];
            rightWord += matrix[row][col + j];
            upWord += row - j >= 0 ? matrix[row - j][col] : ''
            downWord += row + j < numRows ? matrix[row + j][col] : ''
            leftUpWord += row - j >= 0 && col - j >= 0 ? matrix[row - j][col - j] : '';
            rightUpWord += row - j >= 0 && col + j < numCols ? matrix[row - j][col + j] : '';
            leftDownWord += row + j < numRows && col - j >= 0 ? matrix[row + j][col - j] : '';
            rightDownWord += row + j < numRows && col + j < numCols ? matrix[row + j][col + j] : '';
        }

        const words = [
            rightWord,
            upWord,
            downWord,
            leftUpWord,
            rightUpWord,
            leftDownWord,
            leftWord,
            rightDownWord
        ]

        count += words.filter(word => word == "MAS").length
    }

    console.log(count);
})