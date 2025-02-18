// Bubble sort :
// integer:
function bubbleSort(arr){
    // for(let i=0;i<arr.length-1;i++){
    //     for(let j=0;j<arr.length-i-1;j++){
    //         if(arr[j]>arr[j+1]){
    //             [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
    //             console.log(arr);
    //         }
    //     }
    // }

    do{
        var swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
               [ arr[i] , arr[i+1] ] = [arr[i+1] , arr[i]];
               console.log(arr)
                swapped=true;
            }
        }
    }
    while(swapped)
        console.log("swapped")
    

}
bubbleSort([3,1,6,5,10,9]);


// strings:
// function bubbleSortString(str){
//     do{
//         var swapped=false;
//         for(let i=0;i<str.length;i++){
//             if(str[i]>str[i+1]){
//                 [str[i] , str[i+1]] = [str[i+1] , str[i]];
//                 swapped=true;
//             }
//         }
//     }
//     while(swapped)
//         console.log(str);
// }
// bubbleSortString(['Zebra' , 'Kavinisha' , 'Vajesh' , 'Karthi' , 'Dhosthu']);


// object :


// function bubbleSortObject(obj){
//     do{
//         var swapped= false;
//         for(let i=0;i<obj.length-1;i++){
//             if(obj[i].name.toLowerCase() >obj[i+1].name.toLowerCase()){
//                 [obj[i] , obj[i+1]]=[obj[i+1] , obj[i]];
//                 swapped=true;
//             }
//         }
//     }
//     while(swapped)
//         console.log(obj);

// }
// bubbleSortObject([
//     {name : "Vajesh" , age : "18" , grade : "A"} ,
//     {name : "Kavi" , age : "41" , grade : "Z"},
//     {name : "Sridhar" , age : "21" , grade : "A"},
//     {name : "Sudhan" , age : "20" , grade : "B"}
    
// ])
