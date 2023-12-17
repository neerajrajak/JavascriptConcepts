// O(n^2)
function maxSubArraySumOn2(inputIntegers, limit) {
  let k = limit - 1;
  let max = -Infinity;
  for (let i = 0; i <= inputIntegers.length - limit + 1; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum = sum + inputIntegers[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  console.log(max);
  return max;
}

// O(n)
function maxSubArraySum(inputIntegers, limit) {
  let maxSum = 0;
  let tempSum = 0;
  if(inputIntegers.length < limit) return null;
  for (let i = 0; i < limit; i++) {
    maxSum += inputIntegers[i];
  }
  tempSum = maxSum;
  for (let k = limit; k < inputIntegers.length; k++) {
    tempSum = tempSum - inputIntegers[k - limit] + inputIntegers[k];
    console.log('Temp ',tempSum);
    maxSum = Math.max(tempSum, maxSum);
    console.log('MAx : ',maxSum);
  }
  return maxSum;
}


//console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4));

