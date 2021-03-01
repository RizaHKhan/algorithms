function arrayConversion(inputArray) {
  let addFlag = true,
    tempArray = [],
    i = 0;

  while (inputArray.length > 1) {
    while (i < inputArray.length - 1) {
      tempArray.push(
        addFlag
          ? inputArray[i] + inputArray[i + 1]
          : inputArray[i] * inputArray[i + 1]
      );
      i += 2;
    }

    i = 0;
    inputArray = tempArray;
    tempArray = [];
    addFlag = !addFlag;
  }

  return inputArray[0];
}

describe("arrayConversion", () => {
  it("should output 186", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const results = arrayConversion(arr);
    expect(results).toBe(186);
  });
});
