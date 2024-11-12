// triangle shape pattern

let num=5;
for(let i=1;i<=num;i++){
    let row="";
    for(let j=num-i;j>=0;j--){
        row+=" ";
    }
    for(let k=1;k<=i;k++){
        row+=k+" ";
    }
    console.log(row);
}






