function fileNaming(names) {
  // set to an empty object
  const used = {};

  // Use map to go thorugh each element and perform some action.
  return names.map((name) => {
    // declare a new variable and set it to name
    let newName = name;
    console.log("used[newName]", used[newName]);
    while (used[newName]) {
      newName = `${name}(${used[name]++})`;
    }
    used[newName] = 1;
    return newName;
  });
}

const arr = [
  "dd",
  "dd(1)",
  "dd(2)",
  "dd",
  "dd(1)",
  "dd(1)(2)",
  "dd(1)(1)",
  "dd",
  "dd(1)",
];

fileNaming(arr);
