
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof(matrix) == 'undefined' || matrix.length == 0) return [];
  
  let result = [];	
  for (let i = 0; i < matrix.length; i++) {
    result = result.concat(i % 2 == 0 ? matrix[i] : matrix[i].reverse());
  }

  return result;

}
