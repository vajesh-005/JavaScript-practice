let n=10;
for(let i=1;i<=n;i++){
    let row="";
    for(let k=n-i;k>=i;k--){
        row+=" "
    }
    for(let j=1;j<=i;j++){
        if(j==3&&j==5){
            row+="Fizzbuzz";
        }
        else if(j%3==0){
            row+="Fizz";
        }
        else if(j%5==0){
            row+="buzz";
        }
        else{
            row+=j+" ";
        }
    }

    console.log(row);
}