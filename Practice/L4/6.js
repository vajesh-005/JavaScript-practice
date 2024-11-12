// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.


let arr=[4,5,1,2,5,3];

function max(){
    let max1=arr[0];
    for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max1=arr[i];
    }
}
return max1;

}
let result=max([4,5,1,2,5,3]);
console.log(arr.indexOf(max()));