function gcd(a,b){
let max=Math.max(a,b);
let temp=0;
for(let i=1;i<=max;i++){
    if(a%i==0 && b%i==0){
        temp=i;
    }
}
return temp;
}
function lcm(a,b){
    let cal=a*b/gcd(a,b);
    return cal;
}
console.log(gcd(15,45))