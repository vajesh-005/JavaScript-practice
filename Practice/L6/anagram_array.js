function anagramInArray(arr){
    let obj ={};
    for(let i=0;i<arr.length;i++){
        let key = arr[i].split("").sort().join("");

        if(obj[key]){
            obj[key].push(arr[i])
        }
        else{
            obj[key] = [arr[i]]
        }
    }
    console.log(obj);
    let result = [];
    for(let item in obj){
        result.push(obj[item]);
    }
    console.log(result)
}
anagramInArray(["eat", "tea", "tan", "ate", "nat", "bat"]);

//Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];