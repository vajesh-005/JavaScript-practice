function recursionPattern(n) {
  if (n === 0) return;
  // console.log(n);
  
    recursionPattern(n - 1);
  let stars='';
  for(let i=1;i<=n;i++){
    stars+='*';
  }
  console.log(stars);
}
recursionPattern(4);

