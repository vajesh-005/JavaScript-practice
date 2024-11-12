// function find(a,b){
// for(let i=0;i<a.length;i++){
// if(a[i]==b){
//     return true;
// }
// }
// return false;
// }
// console.log(find(["vajesh","divi"],"vajesh"))

let int = [28, 19, 5, 33, 20, 8, 21, 24, 42, 39, 29, 46, 38, 13, 45, 3, 23, 50, 4, 30, 
    37, 2, 25, 34, 1, 32, 35, 26, 16, 49, 18, 6, 27, 41, 43, 36, 48, 7, 40, 17, 
    10, 12, 14, 44, 47, 31, 22, 9, 11, 15];
 let x=24;
 for(let i=0;i<int.length;i++){
   if(x===int[i]){
    console.log(i);
   }
 }

// let int = [28, 19, 5, 33, 20, 8, 21, 24, 42, 39, 29, 46, 38, 13, 45, 3, 23, 50, 4, 30, 
//      37, 2, 25, 34, 1, 32, 35, 26, 16, 49, 18, 6, 27, 41, 43, 36, 48, 7, 40, 17, 
//         10, 12, 14, 44, 47, 31, 22, 9, 11, 15];
// let sort = int.sort((a,b)=>a-b);
//  let x = 24;
//  let right=sort.length-1;
//  let left =0
//  while(left<=right){
//     let mid = Math.floor(left+right/2);
//     if(x===sort[mid]){
//         console.log(mid);
//         break;
//     }

//     else if(sort[mid]< x){
//         left = mid+1;
//     }

//     else{
//         right =mid-1;
//     }


// }

    