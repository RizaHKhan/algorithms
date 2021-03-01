function rangeBitCount(a, b) {
  const arr = [];
  for (let x = a; x <= b; x++) {
    arr.push(x.toString(2));
  }

  return arr
    .map((a) => a.split("").reduce((accum, cv) => accum + Number(cv), 0))
    .reduce((accum, cv) => accum + cv, 0);
}

describe("arrayPacking", () => {
  it("should return 11", () => {
    const a = 2;
    const b = 7;
    const results = rangeBitCount(a, b);
    expect(results).toBe(11);
  });
});
