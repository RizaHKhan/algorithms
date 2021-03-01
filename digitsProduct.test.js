function digitsProduct(product) {}

describe("digitsProduct", () => {
  it("should return 12", () => {
    const product = 12;
    const response = digitsProduct(product);
    expect(response).toBe(26);
  });
  it("should return 10", () => {
    const product = 0;
    const response = digitsProduct(product);
    expect(response).toBe(10);
  });
  it("should return 889", () => {
    const product = 576;
    const response = digitsProduct(product);
    expect(response).toBe(889);
  });
});
