p = (a) => eval(a.join`*`) == 362880;
sudoku = (grid) =>
  grid.every((r, i) => {
    console.log("r", r);
    console.log("i", i);
    return (
      p(r) &&
      p(grid.map((r) => r[i])) &&
      p(
        r.map(
          (_, j) =>
            grid[3 * ((i / 3) | 0) + ((j / 3) | 0)][3 * (i % 3) + (j % 3)]
        )
      )
    );
  });

const trueGrid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
];

const falseGrid = [
  [1, 3, 2, 5, 4, 6, 9, 2, 7],
  [4, 6, 5, 8, 7, 9, 3, 8, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
];

console.log(sudoku(trueGrid));
