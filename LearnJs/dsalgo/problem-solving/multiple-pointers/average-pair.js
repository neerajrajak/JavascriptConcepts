function averagePair(inpArguments, n) {
  if(!inpArguments.length) return false;  
  let i = 0;
  let j = 1;
  while (j < inpArguments.length) {
    const avg = (inpArguments[i] + inpArguments[j]) / 2;
    if (avg === n) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 11));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));

