

const checkNonRepeated = (str)=>{
    let currentChar = str.charAt(0);
    if(str.indexOf(currentChar) === str.lastIndexOf(currentChar)){
        return currentChar;
    } else {
        str = str.substring(1);
        return checkNonRepeated(str);
    }
}

console.log(checkNonRepeated('abacba'));