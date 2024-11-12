function min(num){
    let b=num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]<b){
            b=num[i];
        }
    }
    return b;
}
let result=min([1,2,3,4,5,6])
console.log(result);