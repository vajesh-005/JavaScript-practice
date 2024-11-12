function isfactorial(num) {
    let fact = 1;
    if (num == 1 || num == 0) {
        return 1;
    }
    else {
        for (let i = num; i >= 1; i--) {
            fact *= i;
        }
        return fact;
    }
}
function sumOfFactorial(n) {
    let total = 0;
    if(n==0){
        return 1;
    }
   else{
    for(let j=1;j<=n;j++){
        total+=isfactorial(j);
    }
    return total;
   }
}
console.log(sumOfFactorial(1));