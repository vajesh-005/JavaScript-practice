function chrono(date) {
    let months = {
        JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6, JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12
    }
    let [month1, date1, year1] = date[0].split('-');
    let [month2, date2, year2] = date[1].split('-');

    date1 = Number(date1);
    date2 = Number(date2);
    year1 = Number(year1);
    year2 = Number(year2);

    if (year1 > year2 || year1 == year2 && months[month1] > months[month2] || year1 == year2 && months[month1] == months[month2] && date1 > date2) {
        console.log(`date 1 is greater than date 2 `);
    }

    else if (year1 < year2 || year1 == year2 && months[month1] < months[month2] || year1 == year2 && months[month1] == months[month2] && date1 < date2) {
        console.log(` date 2 is greater than date 1`);
    } 
    else {
        console.log(`Two dates are equal`);
    }
}
chrono(['JAN-12-2005', 'JUN-24-2006']);