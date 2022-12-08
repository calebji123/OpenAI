const gridSize = 4;

// The initial state of the grid
let grid = [  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

// Generate a random starting tile (either 2 or 4)
function generateStartingTile() {
  return Math.random() < 0.9 ? 2 : 4;
}

// Choose a random empty cell in the grid and set its value to a starting tile
function addStartingTile() {
  const emptyCells = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] == 0) {
        emptyCells.push({i, j});
      }
    }
  }
  if (emptyCells.length > 0) {
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[randomCell.i][randomCell.j] = generateStartingTile();
  }
}


function shiftRowOrColumn(grid, index, direction) {
   // Create a copy of the grid to modify
   let shiftedGrid = grid.map(row => row.slice());
 
   // Shift the tiles in the specified row or column depending on the direction
   if (direction == "up") {
     // Get the column at the specified index
     let column = shiftedGrid.map(row => row[index]);
     // Shift the tiles in the column upward
     column = shiftArray(column, direction);
     // Update the grid with the shifted column
     for (let r = 0; r < shiftedGrid.length; r++) {
       shiftedGrid[r][index] = column[r];
     }
   } else if (direction == "down") {
     // Get the column at the specified index
     let column = shiftedGrid.map(row => row[index]);
     // Shift the tiles in the column downward
     column = shiftArray(column, direction);
     // Update the grid with the shifted column
     for (let r = 0; r < shiftedGrid.length; r++) {
       shiftedGrid[r][index] = column[r];
     }
   } else if (direction == "left") {
     // Get the row at the specified index
     let row = shiftedGrid[index];
     // Shift the tiles in the row to the left
     row = shiftArray(row, direction);
     // Update the grid with the shifted row
     shiftedGrid[index] = row;
   } else if (direction == "right") {
     // Get the row at the specified index
     let row = shiftedGrid[index];
     // Shift the tiles in the row to the right
     row = shiftArray(row, direction);
     // Update the grid with the shifted row
     shiftedGrid[index] = row;
   }
 
   return shiftedGrid;
 }


 function shiftArray(array, direction) {
   // Create a copy of the array to modify
   let shiftedArray = array.slice();
 
   // Remove all empty elements from the array
   shiftedArray = shiftedArray.filter(element => element != 0);
 
   // Shift the elements in the array depending on the direction
   if (direction == "up" || direction == "left") {
     // Combine equal adjacent elements and shift them to the front of the array
     for (let i = 0; i < shiftedArray.length - 1; i++) {
       if (shiftedArray[i] == shiftedArray[i + 1]) {
         shiftedArray[i] *= 2;
         shiftedArray.splice(i + 1, 1);
       }
     }
   } else if (direction == "down" || direction == "right") {
     // Combine equal adjacent elements and shift them to the end of the array
     for (let i = shiftedArray.length - 1; i > 0; i--) {
       if (shiftedArray[i] == shiftedArray[i - 1]) {
         shiftedArray[i] *= 2;
         shiftedArray.splice(i - 1, 1);
       }
     }
   }
 
   // Add empty elements back to the array to fill it up
   while (shiftedArray.length < array.length) {
     if (direction == "up" || direction == "left") {
       shiftedArray.push(0);
     } else if (direction == "down" || direction == "right") {
       shiftedArray.unshift(0);
     }
   }
 
   return shiftedArray;
 }
 
function updateDisplay() {
   //* From "2048 game add javascript grid to html table" prompt
    // Get a reference to the table element
    let table = document.getElementById("grid");

    // Create the HTML content for the table
    let html = "";
    for (let r = 0; r < grid.length; r++) {
    // Start a new row
    html += "<tr>";
    for (let c = 0; c < grid[0].length; c++) {
       // Add a cell for each tile in the row
       if (grid[r][c] != 0){
          html += `<td class="tile-${grid[r][c]}">${grid[r][c]}</td>`;
       } else {
          html += `<td class="empty"></td>`
       }
    }
    // End the row
    html += "</tr>";
    }
 
    // Set the HTML content of the table
    table.innerHTML = html;
}


 //*Added
window.addEventListener('keydown', (event) => {const callback = {
   "ArrowLeft"  : () => {shiftGrid("left")},
   "ArrowRight" : () => {shiftGrid("right")},
   "ArrowUp"    : () => {shiftGrid("up")},
   "ArrowDown"  : () => {shiftGrid("down")},
}[event.key]
callback?.()});


function shiftGrid(dir) {
   for (let i = 0; i < gridSize; i++) {
      grid = shiftRowOrColumn(grid, i, dir)
   }
   addStartingTile()
   updateDisplay()
}

addStartingTile()
updateDisplay()
//*



