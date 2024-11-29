function isPalindrome(n){
    let empty=[];
    for(let i=0;i<n.length;i++){
        let pop=n[i].pop();
        empty.unshift(pop);

    }
    return empty;
}
console.log(isPalindrome("racecar"));