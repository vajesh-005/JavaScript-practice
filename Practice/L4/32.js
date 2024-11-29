function dates(date){
    let [year1 , month1 , date1] = date[0].split("-").map(Number);
    let [year2 , month2 , date2] = date[1] .split("-").map (Number);
    
    if(year1>year2 || year1==year2 && month1>month2 || year1==year2 && month1==month2 && date1>date2){
        return "date 1 is after date 2";
    } else if(year1<year2 || year1==year2 && month1<month2 || year1==year2 && month1==month2 && date1<date2){
        return "date2 is after date 1";
    } else {
        return "two dates are equal";
    }
 }
 console.log(dates("2024-11-27", "2024-11-26"));