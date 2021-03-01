function diagonalSort(m) {
  const rows = m.length; // 4
  const cols = m[0].length; // 4
  const diagonals = cols + rows - 1;

  for (let k = 0; x < diagonals; k++) {}
}

const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

diagonalSort(matrix);

// describe("diagonalSort", () => {
//   it("should return matrix sorted diagonally", () => {
//     const a = [
//       [1, 3, 9, 4],
//       [9, 5, 7, 7],
//       [3, 6, 9, 7],
//       [1, 2, 2, 2],
//     ];
//     const results = diagonalSort(a);
//     expect(results).toBe([
//       [1, 9, 9, 7],
//       [3, 5, 6, 9],
//       [3, 4, 7, 7],
//       [1, 2, 2, 2],
//     ]);
//   });
// });

/*

[
[0,0], [0,1], [0,2], [0, 3]
[1,0], [1,1], [1,2], [1, 3],
[2,0], [2,1], [2,2], [2, 3],
[3,0], [3,1], [3,2], [3, 3],
]

const range = (lo, hi) => [...Array(hi - lo + 1)].map((_, i) => i + lo);

const diagonals = (rows, cols) =>
  range(0, rows + cols)
    .map((d) =>
      range(0, d)
        .map((x) => [d - x, x])
        .filter(([y, x]) => x >= 0 && x < cols && y >= 0 && y < rows)
    )
    .filter((xs) => xs.length > 0);

const coordLens = (coords) => ({
  get: (m) => coords.map(([x, y]) => m[x][y]),
  set: (arr, m) =>
    coords.reduce(
      (m, [x, y], i) => {
        m[x][y] = arr[i];
        return m;
      },
      m.map((r) => [...r]) // cheap clone
    ),
});

const diagonalLenses = (rows, cols) => diagonals(rows, cols).map(coordLens);

const sortMatrix = (comparator) => (m) =>
  diagonalLenses(m.length, m[0].length).reduce(
    (m, lens) => lens.set(lens.get(m).sort(comparator), m),
    m
  );

const numericSorter = (a, b) => a - b;

console.log(
  sortMatrix(numericSorter)([
    [1, 3, 9, 4],
    [9, 5, 7, 7],
    [3, 6, 9, 7],
    [1, 2, 2, 2],
  ])
    .map((r) => r.join(" "))
    .join("\n")
);
*/
