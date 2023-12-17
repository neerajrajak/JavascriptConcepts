function areThereDuplicates() {
  if (!arguments.length) return false;
  let numberCount = {};
  for (let i = 0; i < arguments.length; i++) {
    const temp = arguments[i];
    numberCount[temp] = numberCount[temp] ? ++numberCount[temp] : 1;
  }
  for (let k in numberCount) {
    if (numberCount[k] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates("a", "b", "c", "a"));
