
// function countVowel(n){
//     let vowel="aeiou";
//     let found=[];
//     for(let i=0;i<vowel.length;i++){
//         if(n[i]=="a" || n[i]=="e" || n[i]=="i" || n[i]=="o" || n[i]=="u"){
//            found.push(n[i]);
//         }
//     }
 
//   let foundVowel=found[0];
//   for(let i=0;i<found.length;i++){
//     if(found[i]==found[0]){
//         foundVowel=found[i];
        

//     }
//   }
//   return foundVowel.length;
// }
// console.log(countVowel("hello"));

function countVowel(n){
    let vowel="aeiou";
    let found="";
    let count=0;
    for(let i=0;i<n.length;i++){
        let char=n[i];
        if(vowel.includes(char)){
            if(!found.includes(char)){
                found+=char;
                count++;
            }
        };







        
    }
    return count;
}
console.log(countVowel("hello"));