function minDiffOfArrays(a, b) {
  let runningSum = 0;

  for (let x = 0; x < a.length; x++) {
    const num = a[x];
    let sum = 0;
    for (let y = 0; y < a.length; y++) {
      const newArr = [...a];
      newArr.splice(y, 1, num);
      sum += Math.abs(newArr[y] - b[y]);
      console.log(num);
    }

    if (sum < runningSum) {
      runningSum = sum;
    }
  }

  return runningSum;
}

const a = [1, 3, 5];
const b = [5, 3, 1];

console.log(minDiffOfArrays(a, b));
