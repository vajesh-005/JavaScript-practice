//Implement an algorithm that checks if the string has unique elements.

function unique(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(find(arr[i])){
            result.push(true);
        } else{
            result.push(false);
        }
    }
    console.log(result);
}
function find(single){
    let obj ={};
    for(let i=0;i<single.length;i++){
        if(obj[single[i]]){
            obj[single[i]]++;
        } else{
            obj[single[i]]=1;
        }
    }
    let isCondition=false;
    for(let item in obj){
        if(obj[item]<=1){
            isCondition=true;
        } else{
            isCondition=false;
            break;
        };
    }
    return isCondition;
}
let arr= ["apple" , "vajesh" , "sudharshan" , "karthi" , "sridhar"];
unique(arr);