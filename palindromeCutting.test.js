function palindromeCutting(s) {
  if (!s.length) {
    return "";
  }

  for (let x = s.split("").length; x > 0; x--) {
    const word = s.split("").splice(0, x);
    const prefixJoined = word.join("");
    const prefixReversed = word.reverse().join("");
    if (prefixJoined === prefixReversed) {
      if (prefixJoined.length > 2) {
        if (!s.replace(prefixJoined, "").length) {
          return "";
        }

        return palindromeCutting(s.replace(prefixJoined, ""));
      }
    }
  }
  return s;
}

describe("palindromeCutting", () => {
  it("should return nothing", () => {
    const string = "aaacodedoc";
    const results = palindromeCutting(string);
    expect(results).toBe("");
  });

  it("should return nothing", () => {
    const string = "codesignal";
    const results = palindromeCutting(string);
    expect(results).toBe("codesignal");
  });
});
