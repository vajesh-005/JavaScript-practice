// Add an element in an array, don't add if its already present. 
// For eg in an array [5, 10, 3, 11, 18], if we add 3 it should allow as the element is already there. 

function addElement(arr , add){
    let isDuplicate =false;
    for(let i=0;i<arr.length;i++){
        if(add==arr[i]){
            isDuplicate=true;
            console.log("Duplicate element found");
            return ;
        }
    }
    if(!isDuplicate){
        arr.push(add);
    }
console.log(arr);
}
addElement([5, 10, 3, 11, 18] , 3)