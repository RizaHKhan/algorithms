function firstRecurringCharacter(input) {
    var checkerArr = [];
    var firstDuplicate = null;
    for (var x = 0; x < input.length; x++) {
        if (!checkerArr.length) {
            checkerArr.push(input[x]);
        }
        else if (checkerArr.length) {
            if (checkerArr.includes(input[x])) {
                firstDuplicate = input[x];
                break;
            }
            else {
                checkerArr.push(input[x]);
            }
        }
    }
    return firstDuplicate;
}
// with Hash Maps
function firstreccuringwithhash(input) {
    var map = {};
    for (var x = 0; x < input.length; x++) {
        if (map[input[x]] !== undefined) {
            return input[x];
        }
        else {
            map[input[x]] = x;
        }
    }
}
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstreccuringwithhash([2, 5, 1, 2, 3, 5, 1, 2, 4]));
