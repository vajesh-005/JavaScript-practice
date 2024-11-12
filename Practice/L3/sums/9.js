let n=5;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=n-i;j>=1;j--){
        row+=" ";
    }
    for(let k=1;k<=i;k++){
        row+=k+" ";
    }
    console.log(row);
}