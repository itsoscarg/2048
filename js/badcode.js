// Game2048.prototype.moveLeft = function () {
//   var updatedBoard = [];
//
//   this.board.forEach(function (row) {
//     //1. Remove empties from row
//     var newRow = [];
//
//     row.forEach(function (cell) {
//       if (cell !== null) {
//           newRow.push(cell);
//       }
//     });
//     //2. Merge tiles in row that are together and the same
//     for (var i = 0; i < newRow.length; i += 1) {
//       if (newRow[i] === newRow[i + 1]) {
//         newRow[i] *= 2;
//         newRow[i + 1] = null;
//       }
//     }
//     //3. Remove new empties in the middle
//     //    e.g. [8, 8, 4] -> [16, null, 4]
//     //        we want to end up with [16, 4]
//     var moved = [];
//
//     newRow.forEach(function (cell) {
//       if (cell !== null) {
//         moved.push(cell);
//     }
// });
//     //4. push() nulls until row has length 4 again
//         while (moved.length < 4) {
//         moved.push(null);
//     }
//     updatedBoard.push(moved);
//  });
//  this.board = updatedBoard;
// };
