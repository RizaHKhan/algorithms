function divideArray(a) {
  a.sort();

  let current = null;
  var count = 0;

  for (let x = 0; x < a.length; x++) {
    if (a[x] != current) {
      if (count > 0) {
        console.log(current, count);
      }
      current = a[x];
      count = 1;
    } else {
      count++;
    }
  }

  if (count > 0) {
    console.log(current, count);
  }
}

describe("palindromeCutting", () => {
  it("should return nothing", () => {
    const arr = [2, 1, 2, 3, 3, 4];
    const results = divideArray(arr);
    expect(results).toBe([
      [2, 1, 3],
      [2, 3, 4],
    ]);
  });

  it("should return nothing", () => {
    const arr = [2, 2, 3, 3, 2, 2];
    const results = divideArray(arr);
    expect(results).toBe([]);
  });
});
