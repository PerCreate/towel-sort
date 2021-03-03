
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    let result = [];
    for (let i = 0; i < matrix.length; i += 1) {
        if (i === 0 || i % 2 === 0) result.push(matrix[i].join(','));
        if (i === 1 || i % 2 !== 0) result.push(matrix[i].reverse().join(','));
    }
    return result.join().split(',');
}
