function mainFunction(a){
console.log("lcm "+lcm(a[0],a[1]));
console.log("gcd "+gcd(a[2],a[3]));
}
function lcm(b,c){
    let cal=b*c/gcd(b,c);
    return cal;
}
function gcd(d,e){
    let max=Math.max(d,e);
    let temp=0;
    for(let i=1;i<=max;i++){
        temp=i;
    }
    return temp;
}

mainFunction([15,20,46,78]);