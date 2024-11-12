function isPrime(num){
    if(num<1){
        return false;
    }
    else{
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                console.log(num+"is not prime");
                return false;
            }
        }
    }
    return  true;
}
let a=isPrime(169);
console.log(a);