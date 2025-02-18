// insertion sort :

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let current= arr[i];
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
        console.log(arr.join(' '));
    }
}
let arr =[5,3,4,2,1];
console.log(arr);
insertionSort(arr);

// string:
// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){
//         let key = arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j] >key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     console.log(arr);
// }
// let arr = ['vajesh', 'kavi' , 'karthi' , 'sudhan' , 'sridhar'];
// console.log(arr);
// insertionSort(arr);

