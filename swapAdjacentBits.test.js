function swapAdjacentBits(n) {
  return ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
  // return parseInt(
  //   [...n.toString(2).padStart(8, "0")]
  //     .map((x, i, arr) => {
  //       return arr[i + 1] ? [arr[i + 1], x] : [];
  //     })
  //     .flat()
  //     .join(""),
  //   2
  // );
}

describe("swapAdjacentBits", () => {
  it("should return 14", () => {
    let a = 13;
    const results = swapAdjacentBits(a);
    expect(results).toBe(14);
  });

  it("should return 133", () => {
    let a = 74;
    const results = swapAdjacentBits(a);
    expect(results).toBe(133);
  });
});
