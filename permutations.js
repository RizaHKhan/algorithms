function findPermutations(arr) {
  const permutes = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      permutes.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = [...arr];
        let next = curr.splice(i, 1);
        permute(curr, [...m, ...next]);
      }
    }
  };

  permute(arr);

  return permutes;
}

const arr = [1, 2, 3];

console.log(findPermutations(arr));

/*
1. [ 1, 2, 3 ], []
  curr = [ 1, 2, 3 ]
  next = [ 1 ]
  permute([2, 3], [1])

2. [2, 3], [1]
  curr = [ 2, 3 ]
  next = [ 2 ]
  permute([ 3 ], [2])


*/
