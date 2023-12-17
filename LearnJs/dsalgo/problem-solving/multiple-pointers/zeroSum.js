
function sumZeroMine(inputIntegers){
    let result = [];
    const totalLength = inputIntegers.length;
    for(let i=0; i < totalLength; i++){
        // check if integers are sorted in ascending
        if(inputIntegers[i+1] < inputIntegers[i]){
            return undefined;
        }
        // check first pairs having sum 0
        const count = inputIntegers[i]+ inputIntegers[totalLength - (i+1)];
        if(count === 0){
            result.push(inputIntegers[i]);
            result.push(inputIntegers[totalLength - (i+1)]);
            return result;
        }
    }
    return undefined;
}

function sumZero(inputIntegers){
    let left = 0;
    let right = inputIntegers.length - 1;
    while(left < right){
        const sum = inputIntegers[left]+inputIntegers[right];
        if(sum === 0){
            return [inputIntegers[left], inputIntegers[right]]
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));
console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));
console.log(sumZero([-4,-3,-2,-1,0,5,10]));