

// This is my solution to be continued
function nativeSearch(longString, pattern){
    let count = 0;
    let start = 0;
    let totalLength = pattern.length;
    let currentWindow = longString.substring(start, totalLength);
    matchedPattern(currentWindow);

    function matchedPattern(str){
        if(str === pattern){
            count++;
        } else {
            start = start+1;
            totalLength = totalLength + 1;
            currentWindow = longString.substring(start, totalLength);
            if(currentWindow.length === pattern.length){
                matchedPattern(currentWindow);
            }
        }
    }
    return count;

}

const count = nativeSearch("checklibyourlibis","lib");
console.log(count);