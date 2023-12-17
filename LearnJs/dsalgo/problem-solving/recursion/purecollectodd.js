
function collectOdd(arr){
    let newArr = [];

    if(!arr.length) return newArr;

    if(arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOdd(arr.slice(1)));

    return newArr;
}

console.log(collectOdd([1,2,3,4,5,6,7,8,9]));