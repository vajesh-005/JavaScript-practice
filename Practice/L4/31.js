function circularShiftRight(arr){
if(arr.length<1) return ;
let newArr=[];
let last =arr[arr.length-1];
for(let i=0;i<arr.length-1;i++ ){
    newArr[i+1]= arr[i];
}
newArr[0]=last;
console.log(newArr);
}
circularShiftRight([45, 21, 15, 19]);