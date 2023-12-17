

/*

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and 
putting it at the beginning. 
The algorithm maintains two subarrays in a given array:
-The subarray which already sorted. 
-The remaining subarray was unsorted.
In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 

In simple understanding:
    In selection sort, you select the first element in an array and then compare them with other elements in that array,
    if the element you selected is smallest then proceed with next element,
    if any element is less than your selected element then swap that element with current index,
    repeat the process with incrementing each time untill you moved and compared till last element
*/


// Space complexity is little more in my solution
const selectionSort=(inputArr)=>{
    let currentIndex = 0;
    sortlogic(currentIndex);
    function sortlogic(current) {
        let small = current;
        for (let index = current + 1; index < inputArr.length; index++) {
            if (inputArr[small] > inputArr[index]) {
                small = index;
            }
        }
        if(small !== current) swap(inputArr, current, small);
        currentIndex = currentIndex + 1;
        if(currentIndex < inputArr.length){
            sortlogic(currentIndex);
        }
    }
    return inputArr;
}

const selectionSortOnline = (inputArr)=>{
    for(i = 0; i < inputArr.length; i++){
        let lowest = i;
        for(j = i+1; j < inputArr.length; j++){
            if(inputArr[j] < inputArr[lowest]){
                lowest = j;
            }
        }
        // avoid unnecessary swap if both index are same
        if(i !== lowest) swap(inputArr, i, lowest);
    }
    return inputArr;
}

function swap(inputArr, current, small) {
    let temp = inputArr[current];
    inputArr[current] = inputArr[small];
    inputArr[small] = temp;
}

console.log(selectionSort([34,23,477,12,67,21,43]));
console.log(selectionSortOnline([34,23,477,12,67,21,43]));
console.log(selectionSort(['Ravi', 'Vishal', 'Neeraj', 'Preeti', 'Arun']));
console.log(selectionSortOnline(['Ravi', 'Vishal', 'Neeraj', 'Preeti', 'Arun']));


/*
Time Complexity: 
The time complexity of Selection Sort is O(N2) as there are two nested loops:
One loop to select an element of Array one by one = O(N)
Another loop to compare that element with every other Array element = O(N)
Therefore overall complexity = O(N) * O(N) = O(N*N) = O(N2)

Auxiliary Space: 
O(1) as the only extra memory used is for temporary variables while swapping two values in Array. 
The selection sort never makes more than O(N) swaps and can be useful when memory write is a costly operation. 
*/
