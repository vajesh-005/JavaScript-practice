arr=[203 ,204, 205, 206, 207 ,208 ,203, 204, 205, 206]
brr=[203 ,204, 204, 205 ,206, 207, 205, 208, 203, 206, 205, 206, 204, 204]
let missing = [];
for(let i=0;i<brr.length;i++){
    if(arr.includes(brr[i])){
        let index = arr.indexOf(brr[i]);
        arr.splice(index,1);
    } else {
        if(!missing.includes(brr[i])){
            missing.push(brr[i]);
        }
    }
}
console.log(missing.sort((a,b)=>a-b).join(" "));