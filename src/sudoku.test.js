const solution = require('./sudoku.js');

test('test 1', () => {
    expect(solution([[1,3,2,5,4,6,9,8,7], 
        [4,6,5,8,7,9,3,2,1], 
        [7,9,8,2,1,3,6,5,4], 
        [9,2,1,4,3,5,8,7,6], 
        [3,5,4,7,6,8,2,1,9], 
        [6,8,7,1,9,2,5,4,3], 
        [5,7,6,9,8,1,4,3,2], 
        [2,4,3,6,5,7,1,9,8], 
        [8,1,9,3,2,4,7,6,5]])).toBe(true);
});

test('test 2', () => {
    expect(solution([[1,3,2,5,4,6,9,2,7], 
        [4,6,5,8,7,9,3,8,1], 
        [7,9,8,2,1,3,6,5,4], 
        [9,2,1,4,3,5,8,7,6], 
        [3,5,4,7,6,8,2,1,9], 
        [6,8,7,1,9,2,5,4,3], 
        [5,7,6,9,8,1,4,3,2], 
        [2,4,3,6,5,7,1,9,8], 
        [8,1,9,3,2,4,7,6,5]])).toBe(false);
});

test('test 3', () => {
    expect(solution([[1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9], 
        [1,2,3,4,5,6,7,8,9]])).toBe(false);
});

test('test 4', () => {
    expect(solution([[1,3,4,2,5,6,9,8,7], 
        [4,6,8,5,7,9,3,2,1], 
        [7,9,2,8,1,3,6,5,4], 
        [9,2,3,1,4,5,8,7,6], 
        [3,5,7,4,6,8,2,1,9], 
        [6,8,1,7,9,2,5,4,3], 
        [5,7,6,9,8,1,4,3,2], 
        [2,4,5,6,3,7,1,9,8], 
        [8,1,9,3,2,4,7,6,5]])).toBe(false);
});

test('test 5', () => {
    expect(solution([[1,3,2,5,4,6,9,8,7], 
        [4,6,5,8,7,9,3,2,1], 
        [7,9,8,2,1,3,6,5,4], 
        [9,2,1,4,3,5,8,7,6], 
        [3,5,4,7,6,8,2,1,9], 
        [6,8,7,1,9,2,5,4,3], 
        [5,4,6,9,8,1,4,3,2], 
        [2,7,3,6,5,7,1,9,8], 
        [8,1,9,3,2,4,7,6,5]])).toBe(false);
});

test('test 6', () => {
    expect(solution([[1,2,3,4,5,6,7,8,9], 
        [4,6,5,8,7,9,3,2,1], 
        [7,9,8,2,1,3,6,5,4], 
        [1,2,3,4,5,6,7,8,9], 
        [4,6,5,8,7,9,3,2,1], 
        [7,9,8,2,1,3,6,5,4], 
        [1,2,3,4,5,6,7,8,9], 
        [4,6,5,8,7,9,3,2,1], 
        [7,9,8,2,1,3,6,5,4]])).toBe(false);
});

test('test 7', () => {
    expect(solution([[5,3,4,6,7,8,9,1,2], 
        [6,7,2,1,9,5,3,4,8], 
        [1,9,8,3,4,2,5,6,7], 
        [8,5,9,9,6,1,4,2,3], 
        [4,2,6,8,5,3,7,9,1], 
        [7,1,3,7,2,4,8,5,6], 
        [9,6,1,5,3,7,2,8,4], 
        [2,8,7,4,1,9,6,3,5], 
        [3,4,5,2,8,6,1,7,9]])).toBe(false);
});

test('test 8', () => {
    expect(solution([[5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5], 
        [5,5,5,5,5,5,5,5,5]])).toBe(false);
});

test('test 9', () => {
    expect(solution([[5,3,4,6,7,8,9,1,2], 
        [6,7,2,3,9,5,3,4,8], 
        [1,9,8,1,4,2,5,6,7], 
        [8,5,9,7,6,1,4,2,3], 
        [4,2,6,8,5,3,7,9,1], 
        [7,1,3,9,2,4,8,5,6], 
        [9,6,1,5,3,7,2,8,4], 
        [2,8,7,4,1,9,6,3,5], 
        [3,4,5,2,8,6,1,7,9]])).toBe(false);
});

test('test 10', () => {
    expect(solution([[5,3,4,6,7,8,9,1,2], 
        [6,7,2,1,9,5,3,4,8], 
        [1,9,8,3,4,2,5,6,7], 
        [8,5,9,7,6,1,4,2,3], 
        [4,2,6,8,5,3,7,9,1], 
        [7,1,3,9,2,4,8,5,6], 
        [9,6,1,5,3,7,2,8,4], 
        [2,5,7,4,1,9,6,3,5], 
        [3,4,5,2,8,6,1,7,9]])).toBe(false);
});

test('test 11', () => {
    expect(solution([[1,2,3,4,5,6,7,8,9], 
        [4,5,6,7,8,9,1,2,3], 
        [7,8,9,1,2,3,4,5,6], 
        [2,3,4,5,6,7,8,9,1], 
        [3,4,5,6,7,8,9,1,2], 
        [5,6,7,8,9,1,2,3,4], 
        [6,7,8,9,1,2,3,4,5], 
        [8,9,1,2,3,4,5,6,7], 
        [9,1,2,3,4,5,6,7,8]])).toBe(false);
});
