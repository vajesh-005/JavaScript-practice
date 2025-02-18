let matrix1 = [[1,2,3] , [3,4,5]];
let matrix2 = [[1,2,3] , [3,4,5]];
let empty=[]
if(matrix1.length!==matrix2.length){
    return 
}
else {
    for(let i=0;i<matrix1.length;i++){
        let temp=[];
        for(let j=0;j<matrix1[i].length;j++){
            temp.push(matrix1[i][j]+matrix2[i][j])
        }
        empty.push(temp)
    }
    console.log(empty)
}