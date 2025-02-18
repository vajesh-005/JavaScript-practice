// Given an array of Integers,
//  remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]

// let arr=[3, 4, 1, 5, 1, 9, 3];
// let empty=[];
// for(let i=0;i<arr.length;i++){
//     if(!empty.includes(arr[i])){
//         empty.push(arr[i]);
//     }
// }
// console.log(empty);

// Duplicate removal:
let arr=[3, 4, 1, 5, 1, 9, 3];
let empty=[];
for(let i=0;i<arr.length;i++){

    let isDuplicate=false;
    for(let j=0;j<empty.length;j++){
        if(arr[i]==empty[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        empty.push(arr[i]);
    }
}
console.log(empty);