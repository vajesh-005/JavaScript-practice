// Given an two arrays,
//  given to Set Intersection on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. Result [1, 5, 8]

function intersection(arr1,arr2){
    let empty=[];
    for(let i=0;i<arr1.length;i++){

        for(let j=0;j<arr2.length;j++){
            if(arr1[i] ==arr2[j]){
                empty.push(arr1[i]);
            }
        }
    }
console.log(empty);

}intersection([3, 1, 5, 7, 8],[5, 1, 8, 10, 11]);
