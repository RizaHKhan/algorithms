function countSumOfTwoRepresentations2(n, l, r) {
  let count = 0;

  for (let i = l; i <= r; i++) {
    console.log({ i, math: n - i, r, bool1: i <= n - 1, bool2: n - i <= r });
    if (i <= n - i && n - i <= r) {
      count++;
    }
  }

  return count;
}

describe("countSumOfTwoRepresentations2", () => {
  it("should return 5", () => {
    const n = 24;
    const l = 8;
    const r = 16;
    const results = countSumOfTwoRepresentations2(n, l, r);
    expect(results).toBe(5);
  });
});
