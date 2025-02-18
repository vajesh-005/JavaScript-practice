function compressString(input) {
    if(input.length==0){
        return '';
    }
    let temp='';
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input.length;j++){
            if(input[i]==input[j]){
                temp+=input[i];
            }
        }
    }
    if(temp===input){
        console.log(input);
        return;
    }else{
        let str='';
    for(let i=0;i<=input.length;i++){
        let count=0;
        for(let j=i;j<=input.length;j++){
            if(input[i]==input[j]){
                count++;
            }else {
                 str+=`${input[i]}${count}`;
             i=j-1;
             break;
             }
                }
            }
            
        console.log(str);
        }
}
compressString("aabbbcca")