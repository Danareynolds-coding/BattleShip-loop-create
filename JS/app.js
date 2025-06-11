
  function makePlayerBoard( rows, cols){
    for (let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = arrayPlayer[i][j];
    gridContainer.appendChild(gridItem)
      }
    }
  }
  makePlayerBoard(3,3);

//   function makeEnemyBoard(){
//     let EnemyBoard = document.getElementById(enemy-board);
//     for (let i=0; i<4; i++){
//     for(let j=0; j<4; j++){
//     const gridItem = document.createElement("div");
//     gridItem.classList.add('grid-item')
//     gridItem.textContent = arrayPlayer[i][j];
//     gridContainer.appendChild(gridItem)
// }
// }
//   }
//   makeEnemyBoard()


  