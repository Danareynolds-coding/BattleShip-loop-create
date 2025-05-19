
  function makePlayerBoard(){
    let PlayerBoard = document.getElementById(player-board);
    for (let i=0; i<4; i++){
    for(let j=0; j<4; j++){
    const gridItem = document.getElementById("item");
    gridItem.classList.add('grid-item')
    gridItem.textContent = arrayPlayer[i][j];
    gridContainer.appendChild(gridItem)
}
}
  }
  makePlayerBoard()

  function makeEnemyBoard(){
    let EnemyBoard = document.getElementById(enemy-board);
    for (let i=0; i<4; i++){
    for(let j=0; j<4; j++){
    const gridItem = document.getElementById("item");
    gridItem.classList.add('grid-item')
    gridItem.textContent = arrayPlayer[i][j];
    gridContainer.appendChild(gridItem)
}
}
  }
  makeEnemyBoard()


  