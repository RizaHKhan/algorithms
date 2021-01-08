function isAdmissibleOverpayment(prices, notes, x) {
  const regex = /^\d+\.\d{0,2}/;

  let priceSensitivityArray = [];

  notes.forEach((note, i) => {
    if (/higher/.test(note) === true) {
      priceSensitivityArray.push(+note.match(regex)[0]);
    } else if (/lower/.test(note)) {
      priceSensitivityArray.push(-+note.match(regex)[0]);
    } else if (/Same/.test(note)) {
    }
  });

  let sum = priceSensitivityArray.reduce((accum, cv) => accum + cv);

  if (sum > x) {
    return false;
  } else {
    return true;
  }
}

test("Should return TRUE", () => {
  const prices = [110, 95, 70];
  const notes = [
    "10.0% higher than in-store",
    "5.0% lower than in-store",
    "Same as in-store",
  ];
  const x = 5;

  const results = isAdmissibleOverpayment(prices, notes, x);

  expect(results).toBe(true);
});

test("Should return FALSE", () => {
  const prices = [48, 165];
  const notes = ["20.00% lower than in-store", "10.00% higher than in-store"];
  const x = 2;

  const results = isAdmissibleOverpayment(prices, notes, x);

  expect(results).toBe(false);
});
