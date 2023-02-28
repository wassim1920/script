function findAllSum(arr, arr2, a) {
  arr.sort();

  let sum = 0;
  for (let x = 0; x < a; x++) {
    if (arr[x] != arr[x + 1] && arr2[x] != arr2[x + 1]);
    sum = sum + arr[x] + arr2[x];
  }
  return sum;
}
let arr = [2, 3, 4, 1, 16, 5, 6, 7];
let arr2 = [2, 3, 4, 1, 22, 5, 6, 7];

let a = arr2 && arr.length;
console.log(findAllSum(arr, arr2, a));






//-------------------------------------------------------//






function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

function printArray(arr, n) {
  let i;
  for (i = 0; i < n; i++) document.write(arr[i] + " ");
  document.write("<br>");
}

let arr3 = [12, 11, 13, 5, 6];
let n = arr.length;

insertionSort(arr, n);
printArray(arr, n);
