Array.prototype.sortBetween = function (start = 0, end = 0, asc = true) {
    const sortedSlice = this.slice(start, end == 0 ? end.length : end + 1)
    .sort((a, b) => (asc ? a - b : b - a));
    this.splice(start, sortedSlice.length, ...sortedSlice);
};

// Test
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Before:", myArray);

// All array desc
myArray.sortBetween();
console.log(myArray);

// Sort 1 to 6
myArray.sortBetween(1, 6);
console.log("1 and 6:", myArray);

// Sort 2 to 8
myArray.sortBetween(2, 8);
console.log("2 and 8 (asc):", myArray);

// Sort 3 to 9
myArray.sortBetween(3, 9, false);
console.log("2 and 8 (desc):", myArray);

myArray.sortBetween();
console.log(myArray);