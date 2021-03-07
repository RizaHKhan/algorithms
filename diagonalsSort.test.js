function diagonalSort(m) {
  const rows = m.length;
  const cols = m[0].length;
  const diagonals = rows * cols - 1;
  const flat = [];

  let newMatrix = Array(rows)
    .fill(0)
    .map((x, i) => Array(cols).fill("xxx"));

  for (let k = 0; k <= diagonals; k++) {
    const temp = [];
    for (let y = cols - 1; y >= 0; y--) {
      let x = k - y;

      if (x >= 0 && x < rows) {
        temp.push(m[y][x]);
      }
    }

    if (temp.length) {
      flat.push(temp.sort());
    }
  }

  flat.forEach((o, oI) => {
    let rowReducer = 0;

    counter = 0;
    o.forEach((i, iI) => {
      if (oI > rows) {
        rowReducer++;
      }
      // newMatrix[oI][iI - counter] = i;
      console.log({ outter: oI - rowReducer }, iI);
      counter--;
    });
  });
}

const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

diagonalSort(matrix);

/*
 [
 [ 1, 3, 3, 1  ],
 [ 9, 5, 4, 2  ],
 [ 9, 6, 7, 2  ],
 [ 7, 9, 7, 2  ]
 ]

 [
   [ {0, 0}, , 3, 1  ],
   [ {1, 0}, { 1, 1 }, 4, 2  ],
   [ 9, { 2, 1 }, { 2, 2 }, 2  ],
   [ { 3, 0 }, { 3, 1 }, 7, 2  ]
 ]
 */
