/*

    Builds up the sort by gradually creating a larger left half which is always sorted

    [5,3,4,1,2] => window 1 largest half is 5, next element 3 is compared
    [3,5,4,1,2] => window 2 largest half 3,5 next element 4 is compared with window
    [3,4,5,1,2] => window 3 largest half 3,4,5 next element 1 is compared with window
    [1,3,4,5,2] => window 4 largest half 1,3,4,5 next element 2 is compared with window
    [1,2,3,4,5]

    In short, taking element one at a time and inserting them at the window in sorted order

    - This algorithm is one of the simplest algorithm with simple implementation
    - Basically, Insertion sort is efficient for small data values
    - Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.

*/

function swap(inputArr, current, small) {
    let temp = inputArr[current];
    inputArr[current] = inputArr[small];
    inputArr[small] = temp;
}

// Here its a wrong approach, since it is going against our insertion priciple as we are swapping on every interation
const myInsertionSort = (inputArr)=>{
    for(let i = 1; i < inputArr.length; i++){
        let smallest = 0;
        for(j= 0; j < i; j++){
            if(inputArr[j] < smallest){
               
            }
        }
        swap(inputArr, i,j);
    }
    return inputArr;
}

const insertionSort = (inputArr)=>{
    for(let i = inputArr.length - 1; i >= 0; i--){
        let current = i;
        for(j = 0; j < i && inputArr[j] > inputArr[current]; j++){
             if(inputArr[j] > inputArr[current]){
                current = j      // here we are finding bigger element in an array and replacing it with the ith element
             }   
        }
       if(current !== i) swap(inputArr,current,i);   // inserting current value replacing with largest one
    }
    return inputArr;
}

// console.log(insertionSort([23,45,67,12,87,34,27]));
console.log(insertionSort([1,2,3,4,-1]));
console.log(myInsertionSort(['Ravi', 'Vishal', 'Neeraj', 'Preeti', 'Arun']));
console.log(myInsertionSort([1,2,9,76,4]));

/*
Time Complexity: O(N^2) 
Auxiliary Space: O(1)
*/