
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = arr.concat(i%2 == 0 ? matrix[i] : matrix[i].reverse());
  }
  return arr
}
