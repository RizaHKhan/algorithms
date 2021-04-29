function shiftZerosToLeft(a) {
  const zerosArr = [];
  for (let x = 0; x < a.length; x++) {
    if (a[x] === 0) {
      zerosArr.push(a.splice(x, 1)[0]);
    }
  }

  return zerosArr.concat(a);
}

const arr = [1, 10, 20, 0, 59, 63, 0, 88, 0];

console.log(shiftZerosToLeft(arr));
