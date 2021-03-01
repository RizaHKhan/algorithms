function sumUpNumbers(string) {
  return string.split(/\D+/).reduce((accum, cv) => +accum + +cv);
}

describe("sumUpNumbers", () => {
  it("should return 14", () => {
    const string = "2 apples, 12 oranges";
    const response = sumUpNumbers(string);
    expect(response).toBe(14);
  });

  it("should return 0", () => {
    const string = "Your payment method is invalid";
    const response = sumUpNumbers(string);
    expect(response).toBe(0);
  });

  it("should return 0", () => {
    const string = "Your payment method is invalid";
    const response = sumUpNumbers(string);
    expect(response).toBe(0);
  });

  it("should return 823", () => {
    const string = "42+781";
    const response = sumUpNumbers(string);
    expect(response).toBe(823);
  });
});
