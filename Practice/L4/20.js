function calculateTotal(cart) {
    let M=500;
    let J=3000;
    let T=1500;
    let P=10;
    let sum=0;
    for(let i=0;i<cart.length;i++){
        for(let j=0+i;j<=i;j++){
        //  console.log(cart[i]*[j])
        if(cart[i][0]=="M"){
            // console.log(cart[i][j]*M)
            // console.log(M*cart[i][2]);
            sum+=M*Number(cart[i][2]);
        }
        else if(cart[i][0]=="J"){
            // console.log(J*cart[i][2]);
            sum+=J*cart[i][2];
        }
        else if(cart[i][0]=="T"){
            // console.log(T*cart[i][2]);
            sum+=T*cart[i][2];
        }
        else if(cart[i][0]=="P"){
            // console.log(P*cart[i][2]);
            sum+=P*cart[i][2];
        }
        
        }
    }
    console.log(sum);
}
calculateTotal(["M 3", "J 1", "T 2"]);