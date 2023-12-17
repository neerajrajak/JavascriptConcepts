
function someRecursive(arr, callback){
    callback(arr);
}

function isOdd(inpArr){
    if(!inpArr.length) return false;
    if(inpArr[0] % 2 !== 0) {
            return true;
        }
    else {
        isOdd(inpArr.slice(1));
    }
}


console.log(someRecursive([1,2,3,4], isOdd));