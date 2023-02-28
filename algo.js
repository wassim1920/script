function findAllSum(arr,arr2,a) {
    arr.sort();
  
    let sum = 0;
    for (let x = 0; x< a; x++) {
      if (arr[x] != arr[x + 1] && arr2[x] != arr2[x + 1] ) ; 
      sum = sum + arr[x] + arr2[x];
    }
    return sum;
  }
  let arr = [2, 3, 4, 1, 16, 5, 6, 7];
  let arr2 = [2, 3, 4, 1, 22, 5, 6, 7];
  
  let a = arr2&&arr.length;
  console.log(findAllSum(arr,arr2, a));