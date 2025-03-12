// function compressString(input) {
//     if(input.length==0){
//         return '';
//     }
//     let temp='';
//     for(let i=0;i<input.length;i++){
//         for(let j=0;j<input.length;j++){
//             if(input[i]==input[j]){
//                 temp+=input[i];
//             }
//         }
//     }
//     if(temp===input){
//         console.log(input);
//         return;
//     }else{
//         let str='';
//     for(let i=0;i<=input.length;i++){
//         let count=0;
//         for(let j=i;j<=input.length;j++){
//             if(input[i]==input[j]){
//                 count++;
//             }else {
//                  str+=`${input[i]}${count}`;
//              i=j-1;
//              break;
//              }
//                 }
//             }
            
//         console.log(str);
//         }
// }
// compressString("abcc");

function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } 
        else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    if (compressed.length < str.length) {
        return compressed;
    } 
    else {
        return str;
    }
}

// Example usage
console.log(compressString("aaabbcddd"));
console.log(compressString("abc"));      


