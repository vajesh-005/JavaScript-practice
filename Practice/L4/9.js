// Find All Indices: Write a function that returns an array of all indices where the target element appears.

let arr=[28, 19, 5, 33, 20, 8, 21, 24, 42, 39, 29, 46, 38, 13, 45, 3, 23, 50, 4, 30, 
    37, 2, 25, 34, 1, 32, 35, 26, 16, 49, 18, 6, 27, 41, 43, 36, 48, 7, 40, 17, 
    10, 12, 14, 44, 47, 31, 22, 9, 11, 15,28];


    let target=28;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            console.log(i);
        }
    }
