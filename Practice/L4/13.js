// In an array of string, return all the string which start with the letter 'a' (Case insensitive) 
// for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

let arr = ["apple", "Ali", "mango","Brush"];


for(let i=0;i<arr.length;i++){
    if(arr[i][0]=='a' || arr[i][0]=='A'){
        console.log(arr[i]);
    }
}