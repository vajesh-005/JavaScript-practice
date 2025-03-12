function dateComparison(arr){
    let obj={
        JAN: 1,
        FEB: 2,
        MAR: 3,
        APR: 4,
        MAY: 5,
        JUN: 6,
        JUL: 7,
        AUG: 8,
        SEP: 9,
        OCT:10,
        NOV:11,
        DEC:12
    }
    let date1=[];
    let date2=[];
    let split = "-";
    let temp='';
    

    for(let i=0;i<arr.length;i++){
        if(arr[0][i]==split){
            date1.push(temp);
            temp='';
        } 
        
    }

    console.log(date1,date2);
}
dateComparison(['JAN-12-2005', 'JUN-24-2006']);