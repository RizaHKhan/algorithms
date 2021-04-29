function reverseString(str: string): string {
  if (str.length < 2) {
    return str;
  }
  // return str.split("").reverse().join("");
  const backwards = [];
  for (let x = str.length - 1; x >= 0; x--) {
    backwards.push(str[x]);
  }
  return backwards.join("");
}
console.log(reverseString("fag"));

const reverseAgain = (str) => str.split("").reverse().join("");
