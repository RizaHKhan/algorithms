function mirrorBits(a) {
  return parseInt([...a.toString(2)].reverse().join(""), 2);
}

describe("deleteDigit", () => {
  it("should return 67", () => {
    const a = 97;
    results = mirrorBits(a);
    expect(results).toBe(67);
  });

  it("should return 1", () => {
    const a = 8;
    results = mirrorBits(a);
    expect(results).toBe(1);
  });
});
