function arrayPrime(n){
    for(let i=0;i<n.length;i++){
        let primeNum=n[i];
        if(isPrime(primeNum)===true){
           console.log(primeNum)
        }
        else{
            console.log("Not a prime")
        }
    }
}

function isPrime(num){
 if(num<=1){
    return false;
 }   
 else{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
 }
 return true;
}
arrayPrime([34,56,69,24,2,3]);
