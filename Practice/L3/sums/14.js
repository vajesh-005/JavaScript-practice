
function even(n) {
    let empty = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            empty.push(n[i]);
        }
    }
console.log(lcm(empty[0],empty[1]));
// console.log(mainLcm(empty[0],empty[1]));
}


    function gcd(a,b){
        let max=Math.max(a,b);
        let temp=0;
        for(let j=1;j<=max;j++){
            if(a%j==0 && b%j==0){
                temp=j;
            }
        }
        return temp;
    }
    function lcm(e,f){
        let cal=e*f;
        return cal/gcd(e,f);
    }

console.log(gcd(12,66));
even([12, 23, 55, 66, 87, 32])