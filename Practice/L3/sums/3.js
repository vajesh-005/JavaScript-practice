function lcm(a,b){
    let max=Math.max(a,b);
    for(let i=max;i<=a*b;i++){
        if(i%a==0 && i%b==0){
            console.log(i);
            break;
        }
    }
}
lcm(10,20);

