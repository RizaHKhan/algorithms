function arrayPacking(a) {
  return a.reduce((value, byte, i) => {
    console.log({ value, byte, pow: Math.pow(256, i) });
    return value + byte * Math.pow(256, i);
  });
}

describe("arrayPacking", () => {
  it("should return 21784", () => {
    const arr = [24, 85, 0];
    const results = arrayPacking(arr);
    expect(results).toBe(21784);
  });
});
