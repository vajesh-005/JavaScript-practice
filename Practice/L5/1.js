//  Matrix :

let arr1=[ [1,2] , [3,4] , [5,6]];
let arr2=[ [1,2] , [3,4] , [5,6]];

if(arr1.length==arr2.length && arr1[0].length == arr2[0].length){
    let wholearr=[];

    for(let i=0;i<arr1.length;i++){
        let temp=[];
        for(let j=0;j<arr1[0].length;j++){
            let add=arr1[i][j]+arr2[i][j];
            temp.push(add);
        }
       wholearr.push(temp);
    }
    console.log(wholearr);
    
}
