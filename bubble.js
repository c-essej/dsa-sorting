/**
 * Implement a function called bubbleSort.
 * Given an array, bubbleSort will sort the values in the
 * array.
 *
 * [1, 2, 3, 4, 5]
 */


function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        let current = arr[j];
        arr[j] = arr[i]
        arr[i] = current;
      }


    }
  }
return arr;
}

module.exports = bubbleSort;