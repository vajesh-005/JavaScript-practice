let a=[5, 3, 7, 8, 2, 6, 4];
let b=[10, 2, 8, 4, 3, 6, 9];

    for(let i=0;i<b.length;i++){
        a.push(b[i]);
    }
    console.log(a.sort((a,b)=>a-b));

