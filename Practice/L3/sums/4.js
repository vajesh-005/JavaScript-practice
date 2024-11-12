function gcd(a,b){
    let min=Math.min(a,b);
    for(let i=min;i>0;i--){
        if(a%i==0 && b%i==0){
            return i
        }
    }
}
function lcm(a,b){
   let gcd1=gcd(a,b);
   let tot=a*b;
   let sum=tot/gcd1;
   return sum;
}
let a=30;
let b=50;

console.log(`gcd ${gcd(a,b)} lcm ${ lcm(a,b)}`);



