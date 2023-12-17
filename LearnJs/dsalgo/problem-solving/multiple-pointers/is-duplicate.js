function areThereDuplicates(...arguments){
    arguments.sort((a,b) => a > b);
    let i = 0;
    let j = 1;
    while(j < arguments.length){
        if(arguments[i] === arguments[j]){
            return true;
        } 
        i++;
        j++;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));