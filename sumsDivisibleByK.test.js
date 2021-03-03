function sumsDivisibleByK(a, k) {
  let counter = 0;
  for (let x = 0; x < a.length; x++) {
    for (let y = 0; y < a.length; y++) {
      if (x !== y) {
        const sum = a[x] + a[y];
        if (sum % k === 0) {
          counter++;
        }
      }
    }
  }
  return counter / 2;
}

describe("sumsDivisibleByK", () => {
  it("should return 4", () => {
    const arr = [1, 2, 3, 4, 5];
    const divider = 3;
    const results = sumsDivisibleByK(arr, divider);
    expect(results).toBe(4);
  });
});
