

function countCharacters(inputStr){
    var charPairs = {};
    for(str of inputStr){
       let key = str.toLowerCase();
       if(key.charCodeAt(0) > 96 && key.charCodeAt(0) < 193)
        charPairs[key] =  ++charPairs[key] || 1;
    }
    return charPairs;
}


console.log(countCharacters('this is with number 34343'));