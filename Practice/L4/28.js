// a=1234;
// let string= a.toString();
// let split=string.split('');
// let empty=[];
// for(let i=0;i<split.length;i++){
    
//     console.log(empty.push(parseInt(split[i])));
// }
// console.log(empty)
// a=1234;
// let sum=0;
// let b=0;
// let str='';
// while(a>0){
//      b=a%10;
//      sum+=b;
//      a=Math.floor(a/10)
//     str+=b+' ';
   
// }
// console.log(Number(str));


function calculateTotal(cart) {
    if(cart.length==0){
        return 0;
    }
    let M=500;
    let J=3000;
    let T=1500;
    let P=10;
    let sum=0;
    for(let i=0;i<cart.length;i++){
    var split=cart[i].split(" ");
           if(split[0]=="M"){
                sum+=M*Number(split[i][2]);
        } else if(split[0]=="J"){
            sum+=J*Number(split[i][2]);
        } else if(split[0]=="T"){
            sum+=T*Number(split[i][2]);
        }
        else if(split[0]=="P"){
            sum+=P*Number(split[i][2]);
        }
        }
        console.log(sum)
    }
calculateTotal(["M 10", "P 5"])






