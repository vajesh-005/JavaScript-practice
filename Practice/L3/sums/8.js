let n=5;
for(i=n;i>=1;i--){
    let row="";
    for(let j=n-i;j>=1;j--){
        row+=" ";
    }
    for(let k=1;k<=i;k++){
        row+=k+" ";
    }
    console.log(row);
}