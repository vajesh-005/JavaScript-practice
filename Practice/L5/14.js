function shellSort(arr){
    if(arr==null || arr.length==0 || typeof arr=="undefined"){
        console.log("Invalid arguments");
    }
    let len = arr.length;
    let gap = Math.floor(len/2);
    // while(gap>0){
    //     for(i=0;i<len;i++){
    //         let temp = arr[i];
    //         let j=i
    //         while(j>=gap && arr[j-gap]>temp){
    //             arr[j] = arr[j-gap];
    //             j=j-gap;
    //         }
    //         arr[j] = temp;
    //     }
    //     gap = Math.floor(gap/2);
    // }
    while(gap>0){
        for(let i=0;i<len;i++){
            let temp = arr[i];
            let j=i;
            while(j>=gap && arr[j-gap]>temp){
                arr[j]=arr[j-gap];
                j=j-gap;
            }
            arr[j]=temp;
        }
        
    }
    console.log(arr)
}
shellSort([4,5,2,1,3]);




