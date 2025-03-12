function kthMaximum(arr , k){

    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let temp =arr[i];
        while(j>=0 && temp>arr[j]){
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = temp;
    }
let empty=[];
for(i=0;i<k;i++){
empty.push(arr[i]);
}
console.log(empty , arr);
}
kthMaximum([12,43,5,1,87,3], 3);