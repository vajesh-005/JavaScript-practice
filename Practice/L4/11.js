// 3D method:


// let arr=[[1, 2, 3], [3, 4, 5[1,2,3]], [2, 2, 1]];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;i++){
        
//     }
// }


function fibo(n){
    let a=0;
    let b=1;
    let sum=0;
    let arr=[];
    for(let i=1;i<n;i++){
        // arr.push(a);
        if(a<10){

            console.log(a);
        }
        sum=a+b;
        a=b;
        b=sum;
    }
    // console.log(arr[n-1]);
}
fibo(10);