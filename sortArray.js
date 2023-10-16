const array = [5, 2, 9, 1, 5, 6];

// Sort the array in descending order
array.sort(function(a, b) {
    return b - a; // Compare in reverse order (b - a for descending)
});

console.log(array);
