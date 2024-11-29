function findMax(arr) {
    if (!arr ||arr.length <1) return undefined;
    if(arr=="") return undefined;
    let max = arr[0];
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  console.log(findMax([1, 3, 5, 2, 4]));
  console.log(findMax([]));
  console.log(findMax([10, -5, 20]));
  console.log(findMax["a", "b", "c"]);
  console.log(findMax());