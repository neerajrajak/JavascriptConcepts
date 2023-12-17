

const inputArr = [34,56,23,54,76,12,49];

const almostSorted = [54,1,2,3,4,5];

// Most programmers do as below
const myBubbleSort = (unsortedArr)=>{
    for(i= 0; i < unsortedArr.length; i++){
       for(j = i+1; j < unsortedArr.length; j++){
        console.log(unsortedArr[i],unsortedArr[j]);
        if(unsortedArr[i] > unsortedArr[j]){
            traditionalSwap(unsortedArr);
        }
       }
    }
    return unsortedArr;
}

const optimizedBubbleSort = (unSorted)=>{
    let noSwap;
    for(i = unSorted.length - 1; i > 0; i--){
        noSwap = true;
        for(j = 0; j < i; j++){
            console.log(unSorted[j],unSorted[j+1]);
            if(unSorted[j]> unSorted[j+1]){
                traditionalSwap(unSorted);
                noSwap = false
            }
        }
        if(noSwap){
            break;
        }
        console.log("First Loop");
    }
    return unSorted;
}

const sorted = optimizedBubbleSort(almostSorted);

console.log(sorted);


function traditionalSwap(unsortedArr) {
    const temp = unsortedArr[i];
    unsortedArr[i] = unsortedArr[j];
    unsortedArr[j] = temp;
}


/*
    Time Complexity

    - Best Case from our optimized code - o(n)
    - Worst Case - o(n^2)
    - Average Case - o(n^2)
*/

