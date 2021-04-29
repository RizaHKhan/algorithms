function compare(a, b) {
  let aItems = a.split([" "]);
  let aRating = [0, 0, 0];

  aItems.forEach((i) => {
    if (i.split("#").length > 1) {
      aRating[0] = aRating[0] + (i.split("#").length - 1);
    }

    if (i.split(".").length > 1) {
      aRating[1] = aRating[1] + (i.split(".").length - 1);
    }

    if (!i.startsWith("#") && !i.startsWith(".")) {
      aRating[2] = aRating[2] + 1;
    }
  });

  let bItems = b.split([" "]);
  let bRating = [0, 0, 0];

  bItems.forEach((i) => {
    if (i.split("#").length > 1) {
      bRating[0] = bRating[0] + (i.split("#").length - 1);
    }

    if (i.split(".").length > 1) {
      bRating[1] = bRating[1] + (i.split(".").length - 1);
    }

    if (!i.startsWith("#") && !i.startsWith(".")) {
      bRating[2] = bRating[2] + 1;
    }
  });

  console.log(aRating, bRating);

  if (aRating[0] > bRating[0]) {
    return a;
  } else if (bRating[0] > aRating[0]) {
    return b;
  }

  if (aRating[1] > bRating[1]) {
    return a;
  } else if (bRating[1] > aRating[1]) {
    return b;
  } else if (
    bRating[0] === aRating[0] &&
    bRating[2] === 0 &&
    aRating[2] === 0
  ) {
    return b;
  }

  if (aRating[2] > bRating[2]) {
    return a;
  } else if (bRating[2] > aRating[2]) {
    return b;
  }
}

console.log(compare(".big", ".small"));
