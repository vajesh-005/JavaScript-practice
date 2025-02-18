// Given an two arrays, given to Set Union on the two arrays.
//  For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].  Result [3, 1, 5, 7, 8, 10, 11]

// function union(arr1 , arr2){
//     for(let i=0;i<arr1.length;i++){
//         let isDuplicate=false;
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 isDuplicate=true;

//             }
//         }
//         if(!isDuplicate){
//             arr2.push(arr1[i]);
//         }
//     }
//     console.log(sorting(arr2))
// }
// union([3, 1, 5, 7, 8],[5, 1, 8, 10, 11]);
// function sorting(arr){
//     let swapped=false;
//     do{
//         swapped=false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]];
//                 swapped=true;
//             }
//         }
//     } while(swapped){
//         return arr;
//     }
// }

function union(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr1.push(arr2[i]);
        }
    }
    console.log(arr1);
}
union([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]);