

const isSqaureMatchesSolnOne = (arr1, arr2)=>{
    let matchObject = {};
    for(let first of arr1){
        const squared = first * first;
        matchObject[first] = arr2.includes(squared);
    }
    const objValues = Object.values(matchObject);
    console.log(objValues);
    return (!objValues.includes(false) && objValues.length === arr1.length);
};


const isMatched = isSqaureMatchesSolnOne([1,2,3], [4,1,9]);

console.log("Matched : ", isMatched);