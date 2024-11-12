let n=3;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=i;
    }
    for(let k=n-1;k>=i;k--){
        row+="  ";
    }
    
    for(let z=1;z<=i;z++){
        row+=i;
    }
    console.log(row);
}
