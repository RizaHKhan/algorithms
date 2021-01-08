function spiralNumbers(n) {
  let matrix = [...Array(n)].map(() => []);
  let x = 0;
  let y = 0;
  let dir = 2;
  let size = n;
  let c = 0;

  for (let i = 1; i <= n ** 2; i++) {
    matrix[y][x] = i;

    // this is where c is increased and once it equals size, change the direction
    if (++c == size) {
      dir = ++dir % 4; //
      console.log(dir);
      size -= dir % 2;
      c = 0;
    }

    if (dir % 2 == 0) x += dir > 1 ? 1 : -1;
    else y += dir > 1 ? 1 : -1;
  }

  return matrix;
}
