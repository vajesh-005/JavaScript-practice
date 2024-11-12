function arr(a){
    let max=a[0];
    for(let i=0;i<=a.length;i++){
        if(a[i]>max){
            max=a[i];
        }
    }
    let tot=0;
    for(let j=0;j<a.length;j++){
        if(a[j]==max){
            tot++;
        }
    }

return tot;
}

console.log(arr([1,2,3,4,5,6,6,6]));
