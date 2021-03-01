function* enumerateDiagonals(xLength, yLength) {
  // Generator function
  for (let y = 0; y < yLength; y++) {
    // loop through yLength times
    yield {
      x: 0,
      y: y,
    };
  }

  for (let x = 1; x < xLength; x++) {
    yield {
      x: x,
      y: yLength - 1,
    };
  }
}

function sliceMatrix(matrix, diagonal) {
  const slice = [];

  for (
    let y = diagonal.y, x = diagonal.x;
    y >= 0 && x < matrix[y].length;
    y--, x++
  ) {
    slice.push(matrix[y][x]);
  }

  return slice;
}

function emplaceIntoMatrix(slice, matrix, diagonal) {
  for (let i = 0; i < slice.length; i++) {
    matrix[diagonal.y - i][diagonal.x + i] = slice[i];
  }
}

const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];

const Ylength = matrix.length;
const Xlength = matrix[0].length;

const sortedMatrix = [];
for (let i = 0; i < Ylength; i++) {
  sortedMatrix[i] = new Array(Xlength);
}

for (const diagonal of enumerateDiagonals(Xlength, Ylength)) {
  console.log(diagonal);
  var slice = sliceMatrix(matrix, diagonal);
  slice.sort();

  emplaceIntoMatrix(slice, sortedMatrix, diagonal);
}

console.log(sortedMatrix);
