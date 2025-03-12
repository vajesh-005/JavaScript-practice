function firstNoDuplicate(str){
  let ob = {};

  for(let i = 0; i < str.length; i++){
    if(ob[str[i]]){
        ob[str[i]]++;
    }
    else{
        ob[str[i]] = 1;
    }
  }
//   console.log(str);

  for(let i = 0; i < str.length; i++){
    if(ob[str[i]] == 1){
        console.log(str[i]);
        break;
    }
  }
}
firstNoDuplicate("aaczbbccdeff");




