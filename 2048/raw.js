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

// Shift all of the cells in a row or column to the left or up, merging any equal cells
function shiftCells(rowOrColumn) {
  // First, move all of the non-zero cells to the beginning of the row/column
  let nonZeroCells = [];
  for (const cell of rowOrColumn) {
    if (cell != 0) {
      nonZeroCells.push(cell);
    }
  }

  // Then, merge any adjacent equal cells
  let mergedCells = [];
  for (let i = 0; i < nonZeroCells.length; i++) {
    if (nonZeroCells[i] == nonZeroCells[i - 1]) {
      mergedCells.push(nonZeroCells[i] * 2);
      i++;
    } else {
      mergedCells.push(nonZeroCells[i]);
    }
  }

  // Finally, fill the remaining space with zeros
  const shiftedCells = Array(rowOrColumn.length).fill(0);
  for (let i = 0; i < mergedCells.length; i++) {
    shiftedCells[i] = mergedCells[i];
  }
  return shiftedCells;
}

// Shift all of the cells in the grid in the given direction, merging any equal cells
function shiftGrid(direction) {
  let shiftedGrid = [];
  if (direction == 'left') {
    // Shift each row to the left
    for (let i = 0; i < gridSize; i++) {
      shiftedGrid.push(shiftCells(grid[i]));
    }
  } else if (direction == 'up') {
    // Shift each column upwards
    for (let j = 0; j < gridSize; j++) {
      const column = [];
      for (let i = 0; i < gridSize; i++) {
        column.push(grid[i][j]);
      }
      shiftedGrid.push(shiftCells(column));
    }
    // Transpose the grid back
    //*Then further completed with "2048 game backend in javascript shiftgrid function" prompt





//*From "transposegrid function for 2048 game javascript" prompt

function transposeGrid(grid) {
  // Create a new array to store the transposed grid
  let transposedGrid = [];

  // Go through each row of the grid
  for (let r = 0; r < grid.length; r++) {
    // Create a new row for the transposed grid
    transposedGrid[r] = [];

    // Go through each column of the grid
    for (let c = 0; c < grid[0].length; c++) {
      // Transpose the value at [r, c] in the original grid to [c, r] in the transposed grid
      transposedGrid[r][c] = grid[c][r];
    }
  }

  return transposedGrid;
}


//*From "keydown event listeners for 2048 javascript game" prompt

// Create a list of keycodes for the arrow keys
const ARROW_KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// Set up the keydown event listener
document.addEventListener("keydown", event => {
  // Check if the pressed key is one of the arrow keys
  if (event.keyCode == ARROW_KEYS.LEFT) {
    // Shift the tiles to the left
    shiftTiles("left");
  } else if (event.keyCode == ARROW_KEYS.UP) {
    // Shift the tiles upward
    shiftTiles("up");
  } else if (event.keyCode == ARROW_KEYS.RIGHT) {
    // Shift the tiles to the right
    shiftTiles("right");
  } else if (event.keyCode == ARROW_KEYS.DOWN) {
    // Shift the tiles downward
    shiftTiles("down");
  }
});

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
    html += `<td class="tile-${grid[r][c]}">${grid[r][c]}</td>`;
  }
  // End the row
  html += "</tr>";
}

// Set the HTML content of the table
table.innerHTML = html;


//*From "2048 game backend in javascript shiftgrid function" prompt
function shiftGrid(grid, direction) {
  // Check if the direction is valid
  if (direction != "up" && direction != "down" && direction != "left" && direction != "right") {
    throw new Error("Invalid direction");
  }

  // Create a copy of the grid to modify
  let shiftedGrid = grid.map(row => row.slice());

  // Shift the tiles in each row or column depending on the direction
  if (direction == "up") {
    // Go through each column of the grid
    for (let c = 0; c < grid[0].length; c++) {
      // Shift all of the tiles in the column upward
      shiftedGrid = shiftRowOrColumn(shiftedGrid, c, direction);
    }
  } else if (direction == "down") {
    // Go through each column of the grid
    for (let c = 0; c < grid[0].length; c++) {
      // Shift all of the tiles in the column downward
      shiftedGrid = shiftRowOrColumn(shiftedGrid, c, direction);
    }
  } else if (direction == "left") {
    // Go through each row of the grid
    for (let r = 0; r < grid.length; r++) {
      // Shift all of the tiles in the row to the left
      shiftedGrid = shiftRowOrColumn(shiftedGrid, r, direction);
    }
  } else if (direction == "right") {
    // Go through each row of the grid
    for (let r = 0; r < grid.length; r++) {
      // Shift all of the tiles in the row to the right
      shiftedGrid = shiftRowOrColumn(shiftedGrid, r, direction);
    }
  }

  return shiftedGrid;
}


//*From "2048 shiftRowOrColumn function javascript" prompt
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


//*From "2048 shiftArray function javascript" prompt

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
