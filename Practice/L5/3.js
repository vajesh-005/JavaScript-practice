// selection sort :
// function selectionSort(arr){

//     for(let i=0;i<arr.length;i++){
//         let min = i ;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min] > arr[j]){
//                 min = j ; 
//             }
//         }
//         if(min!==i){
//         [ arr[min] , arr[i] ] = [ arr[i] , arr[min]];
//         }
//         console.log(arr);
//     }
//     }
//     selectionSort([21,11,3,31,45,20]);
function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        console.log(arr.join(' '));
        if(min!==i){
            [arr[i] , arr[min]] = [arr[min] , arr[i]];
        }
    }
        console.log(arr.join(' '));
}
    selectionSort([4,5,1,3,7]);