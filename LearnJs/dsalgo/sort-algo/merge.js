/*
 - Its a combination of two things - merging & sorting
 - arrays of 0 or 1 element are always sorted
 - works by decomposing array into smaller arrays of 0 or 1, then building up a newly sorted array

    How does it works?

    [8,3,5,4,7,6,1,2]

    [8,3,5,4] [7,6,1,2] 

    [8,3] [5,4] [7,6] [1,2]

    [8] [3] [5] [4] [7] [6] [1] [2]

    [3,8] [4,5] [6,7] [1,2]

    [3,4,5,8] [1,2,6,7]

    [1,2,3,4,5,6,7,8]

*/


// Failed my solution
const myMergeTwoSortedArray = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (result.length < 8) {
    if (arr1.length === 0) {
      result = [...result, ...arr2];
    } else if (arr2.length === 0) {
      result = [...result, ...arr1];
    } else {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        arr1.splice(i, 1);
      } else {
        result.push(arr2[j]);
        arr2.splice(j, 1);
      }
    }
  }

  return result;
};

const mergeTwoSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeTwoSortedArray(left, right);
}

/*
                                                mergeSort([34,45,89,12])

                                mergeSort([34,45])                          mergeSort([89,12])

                           [34]       merge      [45]                    [89]     merge     [12]

                    mergeSort([34])            mergeSort([45])       mergeSort([89])            mergeSort([12])
                            
*/

// Break array until its length is 1
// console.log(myMergeTwoSortedArray([3, 13, 4, 5, 8], [1, 2, 6, 7]));

// console.log(mergeTwoSortedArray([3, 13, 4, 5, 8], [1, 2, 6, 7]));

// console.log(myMergeTwoSortedArray([1, 10, 50], [2, 14, 99, 100]));


console.log(mergeSort([67,34,88,12,45,26,89,17,28]));


/*

    Big O of Merge Sort
    
    Time Complexity
            - Best   => o(n log n )
            - Worst  => o(n log n )
            - Averag => o(n log n )

    Space Complexity
            - o(n)


    Explanation 
        - While decomposing array into equal parts o(log n)       
        - While merging we are doing n comparison o(n) 

        o(log n) + o(n)
*/

