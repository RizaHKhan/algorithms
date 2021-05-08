function fibonacciIterativeRecursive(n) {
  if (n < 2) {
    return n;
  }

  return (
    fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2)
  );
}

console.log(fibonacciIterativeRecursive(8));

function fibIterator(n) {
  let arr = [0, 1];
  for (var i = 2; (i = n + 1); i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}
