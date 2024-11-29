let a=[10, 20, 30, 40, 50];
let sum=0;
for(let i=0;i<a.length;i++){
    if(i%2==0){
        sum+=a[i];
    }
}
console.log(sum);