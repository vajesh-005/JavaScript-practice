
function binary(array){
    let target=28;
let left =0;
let right=array.length-1;

while(left<=right){
    let mid=Math.floor((left+right)/2);

    if(array[mid]==28){
        return mid;
    } else if(array[mid]<target){
        left=mid+1;
    } else {
        right=mid-1;
    }
}
return -1;
 
} console.log(binary([
    27, 5, 43, 18, 34, 7, 22, 49, 15, 2, 
    40, 13, 48, 11, 28, 25, 6, 33, 20, 1, 
    47, 32, 9, 24, 39, 30, 4, 12, 46, 37, 
    35, 31, 19, 21, 3, 42, 14, 38, 45, 16, 
    44, 36, 50, 10, 29, 26, 8, 41, 23, 17
]));