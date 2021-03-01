function deleteDigit(n) {
  return Math.max(
    ...n
      .toString()
      .split("")
      .map((num, i, arr) => {
        let toStripArr = [...arr];
        toStripArr.splice(i, 1);
        return parseInt(toStripArr.join(""));
      })
  );
}

describe("deleteDigit", () => {
  it("should return 52", () => {
    const n = 1001;
    const results = deleteDigit(n);
    expect(results).toBe(101);
  });

  it("should return 101", () => {
    const n = 44435;
    const results = deleteDigit(n);
    expect(results).toBe(4445);
  });
});
