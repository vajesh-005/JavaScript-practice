// Given the array students_per_route = [45, 55, 30, 60, 40], 
// where each element represents the number of students assigned to different bus routes,
//  calculate the total number of buses required if each bus can hold a maximum of 50 students.


let students=[45,55,30,60,40];
let sum=0;
let length=students.length;

for(i=0;i<length;i++){
    if(students[i]>=50){
        sum=sum+2;
    }
    else{
        sum++;
    }
}
console.log(sum);