function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

describe("centuryFromYear", () => {
  it("should return 20", () => {
    const year = 1905;
    const result = centuryFromYear(year);
    expect(result).toBe(20);
  });

  it("should return 17", () => {
    const year = 1700;
    const result = centuryFromYear(year);
    expect(result).toBe(17);
  });

  it("should return 4", () => {
    const year = 374;
    const result = centuryFromYear(year);
    expect(result).toBe(4);
  });
});
