function meanGroups(a) {
  const meanArray = a.map((arr, i) => ({
    average: arr.reduce((accum, cv) => accum + cv, 0) / arr.length,
    index: i,
  }));

  console.log(meanArray);
  return meanArray.reduce((rv, x) => {
    (rv[x.average] = rv[x.average] || []).push(x);
    return rv;
  }, []);
}

const arr = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];

console.log(meanGroups(arr));

/*
describe("meanGroups", () => {
  it("should combine indexes with the same average", () => {
    const n = [
      [3, 3, 4, 2],
      [4, 4],
      [4, 0, 3, 3],
      [2, 3],
      [3, 3, 3],
    ];
    const results = meanGroups(n);
    expect(results).toBe([[0, 4], [1], [2, 3]]);
  });
});
*/
