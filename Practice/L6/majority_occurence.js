function majorityOccurences(arr){
   let ob = {};

   for(let i = 0; i < arr.length; i++){
    if(ob[arr[i]]){
        ob[arr[i]]++;
    }
    else{
        ob[arr[i]] = 1;
    }
   }
   let max = 0;
   let key = '';

   for(let i = 0; i < arr.length; i++){
    if(max < ob[arr[i]]){
        max = ob[arr[i]];
        key = arr[i];
    }
   }
   console.log(key);
   
}
majorityOccurences([11,2,3,4,3,4,5,6,5,6,44,4,4,4,4,4,4]);