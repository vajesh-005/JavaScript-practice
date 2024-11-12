// Input: [3, 5, 7, 15, 9]

let array=[3,5,7,15,9];
var empty=[];
for(let j=0;j<array.length-1;j++){
    function gcd(a,b){
        let nor=0;
        let max=Math.max(a,b);
        for(let i=1;i<=max;i++){
            if(a%i==0 && b%i==0){
                nor=i;
            }
        }
        return nor;
    }
    function lcm(c,d){
        let cal=c*d;
        return cal/gcd(c,d);
    }
    let result=lcm(array[j],array[j+1]);
    empty.push(result);
}
console.log(empty);



