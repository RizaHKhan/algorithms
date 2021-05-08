const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (arr) => {
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] > arr[x + 1]) {
        const temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;
      }
    }
  }

  return arr;
};

const selectSort = (arr) => {
  const len = arr.length;
  for (var x = 0; x < len; x++) {
    let smallestNumber = arr[x];
    let smallestIndex = x;
    for (let y = x; y < len; y++) {
      if (arr[y] < smallestNumber) {
        smallestNumber = arr[y];
        smallestIndex = y;
      }
    }

    const temp = arr[x];
    arr[x] = smallestNumber;
    arr[smallestIndex] = temp;
  }

  return arr;
};

// const insertionSort = (arr) => {
//   const sortedArr = [];
//   for (let x = 0; x < arr.length; x++) {
//     if (!sortedArr.length) {
//       sortedArr.push(arr[x]);
//     } else {
//       for (let y = 0; y < sortedArr.length; y++) {
//         if (arr[x] < sortedArr[y]) {

//           const temp = sortedArr[y];

//         } else {
//           sortedArr.push(arr[x])
//         }
//       }
//     }
//   }

//   return sortedArr;
// };

console.log(insertionSort(arr));
