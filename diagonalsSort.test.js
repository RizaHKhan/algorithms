function diagonalSort(m) {
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
        m.map((r) => [...r])
      ),
  });

  const diagonalLenses = (rows, cols) => diagonals(rows, cols).map(coordLens);

  const sortMatrix = (comparator) => (m) =>
    diagonalLenses(m.length, m[0].length).reduce(
      (m, lens) => lens.set(lens.get(m).sort(comparator), m),
      m
    );

  const numericSorter = (a, b) => a - b;

  console.log(range);

  return sortMatrix(numericSorter)(m).map((r) => r);
}
const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

console.log(diagonalSort(matrix));
