// Given array two arrays student names and scores,
//  return the student name who has the maximum score eg names=["sanjay", "priya", "ramesh", "sanjana"], 
//  scores = [88, 45, 71, 91] Answer sanjana.

function find(scores,names){
    let max=scores[0];
    for(let i=0;i<scores.length;i++){
        if(scores[i]>max){
            max=scores[i];
        }
    }
    console.log(names[scores.indexOf(max)]);
    return max;
}

find([88,45,71,91],["sanjay","priya","ramesh","sanjana"]);
