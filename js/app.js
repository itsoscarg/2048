console.log('app.js is working');
// 1. create game object
var myGlobalGame;

$(document).ready(function() {
  myGlobalGame = new Game2048();

  renderTiles();
});

// 2. take initiat tiles and put them on the screen
function renderTiles (){
 myGlobalGame.board.forEach(function (row, rowIndex){
   row.forEach(function (cell, colIndex) {
     if (cell === null) {
       return;
     }

      // console.log('Tile value: '  + cell);
      // console.log('Row: ' + rowIndex);
      // console.log('Column: ' + colIndex);

      var tileHtml = '<div class="tile tile-position-' + rowIndex+'-'+colIndex+' val-'+cell+'"> '+cell+'</div>';
      $('#tile-container').append(tileHtml);
    });
 });
  }

// 3. handle keyboard events
// 4. move board in object based on keypresses (up, down, left, right)
// 5. updating the screen based on new board state
// 6. win or lose (maybe)
