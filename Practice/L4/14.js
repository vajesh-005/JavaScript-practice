let str="vajesh";
let emp=[];

    for(let i=str.length-1;i>=0;i--){
        emp[emp.length]=str[i];
    }
    console.log(emp.join(''));