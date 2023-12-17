function minSubArrayLen(input, minNum){
    let i = 0;
    let j = 1;
    let sum = 0;
    let min = 0;
    for(i=0; i < input.length; i++){
        sum = sum + input[i];
        if(sum >= minNum){
            min = sum;
            break;
        }
    }
    //console.log(min);
}


console.log(minSubArrayLen([2,3,1,2,4,3], 7));