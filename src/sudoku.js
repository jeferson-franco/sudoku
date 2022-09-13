function solution(grid) {
    let rows = [];
    let columns = [];
    let squares = [];
    for (let i = 0; i < 9; i++) {
        rows.push([]);
        columns.push([]);
        squares.push([]);
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            rows[i].push(grid[i][j]);
            columns[j].push(grid[i][j]);
            squares[squareIndex].push(grid[i][j]);
        }
    }
    return rows.every(row => row.sort().join('') === '123456789') &&
        columns.every(column => column.sort().join('') === '123456789') &&
        squares.every(square => square.sort().join('') === '123456789');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test sudoku

// alternative solution
