function squareDigitsSequence(a0) {
  let used = new Set();

  while (!used.has(a0)) {
    used.add(a0);
    // there is a instance where a0 is removed from the set, at which point the while loop stops.
    a0 = a0
      .toString()
      .split("")
      .map((x) => parseInt(x) ** 2)
      .reduce((a, b) => a + b);
  }

  return used.size + 1;
}

describe("squareDigitsSequence", () => {
  it("should return 9", () => {
    const results = squareDigitsSequence(16);
    expect(results).toBe(9);
  });

  it("should return 4", () => {
    const results = squareDigitsSequence(103);
    expect(results).toBe(4);
  });
});
