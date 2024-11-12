// let a = 10;
// let b = 20; 
// let c = 30;

// let d = a*b*c;
// for(i=1; i<=Math.sqrt(d); i++){
//     if(i%a===0 && i%b===0  && i%c===0){
//            console.log(i);
//     }
// }



let a=0;
let b=1;
let n=10;
let store=0;
let empty=[];
 for(let i=a;i<n;i++){
    if(a<=n){

        empty.push(a);
    }
  
    store=a+b;
    a=b;
    b=store;
    
}
console.log(empty.join());
