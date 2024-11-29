let array = [11, 7, 2, 15];
let target=9;
for(let i=0;i<array.length;i++){
   if(array[i]+array[i+1]==target){
    console.log(i,i+1);
   }
}