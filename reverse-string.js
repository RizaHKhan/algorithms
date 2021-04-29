function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    // return str.split("").reverse().join("");
    var backwards = [];
    for (var x = str.length - 1; x >= 0; x--) {
        backwards.push(str[x]);
    }
    return backwards.join("");
}
console.log(reverseString("fag"));
