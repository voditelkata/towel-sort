
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let b = [];
for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        b.push(matrix[i][j]);
    }
}
  return b;
}
