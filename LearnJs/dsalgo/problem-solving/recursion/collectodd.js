
function collectOddValues(nums){
    let result = [];
    // Example of helper recursive function 
    function helperCollect(helperInput){
        if(!helperInput.length) return;
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helperCollect(helperInput.slice(1));
    }
    helperCollect(nums);

    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));