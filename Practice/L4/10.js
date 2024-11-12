// Search in Nested Arrays: Adapt the linear search to work on an array of arrays, 
// searching for a target element across all nested arrays.



//2D method:
let arr = [[1, 2, 3], [3, 4, 5], [2, 2, 1]];
let target = 5;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] == target) {
console.log(i,j);
        }
    }
}
