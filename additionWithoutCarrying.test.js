function additionWithoutCarrying(param1, param2) {
  let result = 0,
    num = 1;
  while (param1 + param2 > 0) {
    num *= 10; // multiply num by 10
    console.log({ num });
    result += (param1 + param2) % num; // results is (param 1 + param2) and then divided by 10, 100, 1000 etc...
    param1 -= param1 % num;
    param2 -= param2 % num;
  }
  return result;
}

describe("additionWithoutCarrying", () => {
  it("should return 1180", () => {
    const results = additionWithoutCarrying(456, 1734);
    expect(results).toBe(1180);
  });
});
