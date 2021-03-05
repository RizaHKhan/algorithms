function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= current.toString().length) {
    numberOfDigits -= current.toString().length;
    current++;
  }

  return current - 1;
}

describe("squareDigitsSequence", () => {
  it("should return 5", () => {
    const results = pagesNumberingWithInk(1, 5);
    expect(results).toBe(5);
  });

  it("should return 22", () => {
    const results = pagesNumberingWithInk(21, 5);
    expect(results).toBe(22);
  });

  it("should return 10", () => {
    const results = pagesNumberingWithInk(10, 3);
    expect(results).toBe(10);
  });

  it("should return 419", () => {
    const results = pagesNumberingWithInk(80, 1000);
    expect(results).toBe(419);
  });

  it("should return 166", () => {
    const results = pagesNumberingWithInk(76, 250);
    expect(results).toBe(166);
  });
});
