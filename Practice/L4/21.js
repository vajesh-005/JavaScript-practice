// Input: "abcabcbb"
// Output: 3 /
function string(n){
    let found=[];
    let split=n.split('');
    for(let i=0;i<split.length;i++){
        if(split.includes(split[i])){
            if(!found.includes(split[i])){
                found.push(split[i]);
                
            }
        }
    }
    console.log(found.length)
}
string("abcabcbb");








