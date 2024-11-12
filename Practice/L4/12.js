// Given a array of string return the String which has the maximum length.

// let arr = ["Ram", "Abraham", "Peter"];
// let empty=[];
// for(let i=0;i<arr.length;i++){
//    let a= arr[i].split('');
//    empty.push(a);
   
// }
// // console.log(empty);
// let max=empty[0];
// for(let j=0;j<empty.length;j++){
//     if(empty[j].length>max.length){
//        max=empty[j];
       
//     }
    
// }
// console.log(max.toString());


let arr = ["Ram", "Abraham", "Peter"];
let max=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i].length>max.length){
        max=arr[i];
    }
}
console.log(max);