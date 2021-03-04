
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let emptyArray = [];
    if (matrix == undefined){
        return emptyArray;
    }
    let b = [];
   for (let i = 0; i < matrix.length; i++) {
         if (i % 2 == 0){
         b.push(matrix[i]);
        } else {
         b.push(matrix[i].reverse());
        }  
 }
let result = [];
 for (q = 0; q < b.length; q++){
     for (w = 0; w < b[q].length; w++){
         result.push(b[q][w]);
     }
 }
   return result;
}
