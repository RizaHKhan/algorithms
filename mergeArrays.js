function mergeSortedArrays(a, b) {
    if (!a.length) {
        return b;
    }
    else if (!b.length) {
        return a;
    }
    var mergedArray = [];
    while (a.length || b.length) {
        if (a[0] === undefined) {
            mergedArray.push(b.shift());
        }
        else if (b[0] === undefined) {
            mergedArray.push(a.shift());
        }
        else if (a[0] < b[0]) {
            mergedArray.push(a.shift());
        }
        else {
            mergedArray.push(b.shift());
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30, 44, 45]));
