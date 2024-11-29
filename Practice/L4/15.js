// Given an array of strings, return the string which has maximum 'a' character present in it. 
//  eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it



let arr= ["apple", "appeal", "after", "banish"];
let maxString="";
let maxCount=0;
for(let i=0;i<arr.length;i++){
        let count=0;    
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]=='a'){
            count++
        }
    }
    if(count>maxCount){
        maxCount=count;
        maxString=arr[i];
    }
}
console.log(maxString);


// console.log(arr[1].split('').filter(char => char ==='a'));
// let arr = ["apple", "appeal", "after", "banish"];
// let maxString = "";
// let maxCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     // Count occurrences of 'a' in the current string using a for loop with index
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === 'a') {
//             count++;
//         }
//     }

//     // Update maxString if the current string has more 'a's than the previous max
//     if (count > maxCount) {
//         maxCount = count;
//         maxString = arr[i];
//     }
// }

// console.log(maxString); // Output: "appeal"
