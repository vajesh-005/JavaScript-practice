function maximumAreaInRectangle(arr){
    maxArea = [];

    for(let i=0;i<arr.length;i++){
        let left = i , right = i;
        while(left>0 && arr[left-1] >= arr[i]){
            left--;
        } while(right>0 && arr[right+1]>=arr[i]){
            right++;
        }
        let width = left-right+1;
        let area = width*arr[i];

        if(area>maxArea){
maxArea = area;
        }

    }
    console.log(maxArea);
}
maximumAreaInRectangle([2, 1, 5, 6, 2, 3]);