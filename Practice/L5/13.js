var arr = [50, 12, 1, 8, 34,54, 2, 3];
let len=arr.length;
let gap=Math.floor(len/2);
console.log(gap)
while(gap>0){
    for(let i=gap;i<len;i++){
        let temp=arr[i];
        let j=i;
        while(j>=gap && arr[j-gap]>temp){
            arr[j]=arr[j-gap];
            j=j-gap;
        }
        arr[j]=temp;
    }
    gap=Math.floor(gap/2);
    console.log(arr);
}