class State1 {
  constructor() {
    this.cells;
    this.cellSize = 4;
    this.cols;
    this.rows;
  }

  setup() {
    this.cols = width / this.cellSize;
    this.rows = height / this.cellSize;
    this.cells = this.createGrid(this.cols, this.rows);
    frameRate(2);
    // Initialize with a simple geometric shape
    this.initializePattern();
    // frameRate(7);
  }

  createGrid(cols, rows) {
    let grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        grid[i][j] = 0; // Initialize all cells to 0 (dead)
      }
    }
    return grid;
  }



  initializePattern() {
    let left = (this.cols) / 2 - 50;
    let right = (this.cols) / 2 + 50;
    let top = (this.rows) / 2 - 20;
    let bottom = (this.rows) / 2 + 20;
    for (let i = 0; i < this.cols; i++) {
      this.cells[i][top] = 1;
      this.cells[i][bottom] = 1;

    }
    for (let j = 0; j < this.rows; j++) {
      this.cells[left][j] = 1;
      this.cells[right][j] = 1;
    }

  }

  displayGrid() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (this.cells[i][j] === 1) {
          fill(302, 100, 22); // Alive cells are black
        } else {
          fill(88, 62, 76); // Dead cells are white
        }
        noStroke();
        rect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }

  updateGrid() {
    let nextGen = this.createGrid(this.cols, this.rows);
    // Apply cellular automata rules to update each cell
    for (let i = 1; i < this.cols - 1; i++) {
      for (let j = 1; j < this.rows - 1; j++) {
        let neighbors = this.countNeighbors(this.cells, i, j);
        if (i < this.cols / 2) {
          if (this.cells[i][j] === 0 && neighbors === 3) {
            nextGen[i][j] = 1; // Any dead cell with three live neighbors becomes alive
          } else if (this.cells[i][j] === 1 && (neighbors < 1 || neighbors > 3)) {
            nextGen[i][j] = 0; // Any live cell with fewer than two or more than three live neighbors dies
          } else {
            nextGen[i][j] = this.cells[i][j]; // Otherwise, cell remains the same
          }


        } else if (i > this.cols / 2) {
          if ((this.cells[i][j] === 0 && neighbors === 2)) {
            nextGen[i][j] = 1;
          } else if (this.cells[i][j] === 1 && (neighbors < 1 || neighbors > 3)) {
            nextGen[i][j] = 0; // Any live cell with fewer than two or more than three live neighbors dies
          } else {
            nextGen[i][j] = this.cells[i][j]; // Otherwise, cell remains the same
          }
        }
      }
    }
    this.cells = nextGen;
  }

  countNeighbors(grid, x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        count += grid[x + i][y + j];
      }
    }
    count -= grid[x][y]; // Exclude the current cell from the count
    return count;
  }

  draw() {
    background(0);
    this.displayGrid();
    this.updateGrid();
  }
}



