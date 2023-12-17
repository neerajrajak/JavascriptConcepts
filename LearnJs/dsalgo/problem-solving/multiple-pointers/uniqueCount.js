// Solved using frequency pattern
function uniqueCountValuesUsingFrequency(sortedNumbers) {
  const uniqueNumbers = {};
  if (sortedNumbers.length) {
    for (let k of sortedNumbers) {
      const number = k;
      if (uniqueNumbers[k]) {
        ++uniqueNumbers[k];
      } else {
        uniqueNumbers[k] = 1;
      }
    }
    const allnumbers = Object.keys(uniqueNumbers);
    return allnumbers.length;
  } else {
    return 0;
  }
}

function uniqueCountValues(sortedNumbers) {
  if (sortedNumbers.length) {
    let i = 0;
    let j = i + 1;
    while (j < sortedNumbers.length) {
      if (sortedNumbers[i] === sortedNumbers[j]) {
        j++;
      } else {
        i++;
        sortedNumbers[i] = sortedNumbers[j];
        j++;
      }
    }
    return i+1;
  }
  return 0;
}

console.log(uniqueCountValues([1, 1, 1, 1, 2]));
console.log(
  uniqueCountValues([1, 2, 3, 3, 3, 4, 4, 4, 7, 7, 7, 12, 12, 12, 13])
);
console.log(uniqueCountValues([]));
console.log(uniqueCountValues([-2, -1, -1, -1, 0, 1]));
