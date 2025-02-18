function mergeSort(arr1 , arr2){
    let emptyArr = [];
    let i = 0 , j = 0 ;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            emptyArr.push(arr1[i]);
            i++;
        }
        else{
            emptyArr.push(arr2[j]);
            j++;
        }
    }
    while (i<arr1.length) {
        emptyArr.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        emptyArr.push(arr2[j]);
        j++;
    }
    console.log(emptyArr);


}
mergeSort([1,2,4,555,7777] , [32,53,99,100]);
