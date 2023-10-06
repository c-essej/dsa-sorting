/**
 * Given two sorted arrays, write a function called merge
 * which accepts two `sorted arrays and returns a new array
 * with values from both arrays sorted.

This function should run in O(n + m) time and O(n + m)
space and should not modify the parameters passed to it.
 */


function merge(a, b) {

  let result = [];
  let aIdx = 0;
  let bIdx = 0;

  while (aIdx < a.length && bIdx < b.length){
    if (a[aIdx] <= b[bIdx]){
      result.push(a[aIdx]);
      aIdx++;
    } else {
      result.push(b[bIdx]);
      bIdx++;
    }
  }

  if (a[aIdx] === undefined){
    while (bIdx < b.length){

      result.push(b[bIdx])
      bIdx++
    }
  }

  if (b[bIdx] === undefined){
    while (aIdx < a.length){

      result.push(a[aIdx])
      aIdx++
    }
  }
  // console.log('result ----->', result);

return result;
}


/**
 * Implement the merge sort algorithm. Given an array, this
 * algorithm will sort the values in the array. Here’s some
 * guidance for how merge sort should work:

Break up the array into halves until you can compare one
value with another
Once you have smaller sorted arrays, merge those with other
sorted pairs until you are back at the full length of the
array
Once the array is merged back together, return the merged
(and sorted!) array
In order to implement this function, you’ll also need to
 implement a merge function that takes in two sorted arrays
 and returns a new sorted array. You implemented this
 function in the previous exercise, so use that function!
 */

function mergeSort(arr) {

  if (arr.length === 0 || arr.length === 1) return arr;

  let middleIdx = Math.floor(arr.length / 2); //gets middle index
  console.log('left up --->', arr.slice(0, middleIdx))
  let left = mergeSort(arr.slice(0, middleIdx));  //gets the left side of the arr
  console.log('left down --->', left)
  console.log('right up --->', arr.slice(middleIdx))

  let right = mergeSort(arr.slice(middleIdx)); //gets the right side of the arr
  console.log('right down--->', right)

  return merge(left, right); //passing the two arrays into merge

}

module.exports = { merge, mergeSort};