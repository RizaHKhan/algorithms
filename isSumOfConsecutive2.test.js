function isSumOfConsecutive2(n) {
  count = 0;
  for (i = 1; i < n; i++) {
    // start from 1 to the max of n - 1
    s = i; // variable equal to the index
    for (j = i + 1; j < n; j++) {
      // declaring j which is 1 more then i and then can't be more then n
      s += j; // increase s by j
      if (s == n) {
        count++;
      } // if s and n are equal count++
      else if (s > n) {
        break;
      }
    }
    return count;
  }
}

describe("isSumOfConsecutive2", () => {
  it("should return 2", () => {
    const num = 9;
    const results = isSumOfConsecutive2(num);
    expect(results).toBe(2);
  });
});
