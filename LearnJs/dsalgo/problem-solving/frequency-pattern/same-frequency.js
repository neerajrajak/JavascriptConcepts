function sameFrequency(first, second) {
  const firstInput = first.toString();
  const SecondInput = second.toString();
  if (firstInput.length !== SecondInput.length) return false;

  let firstMatched = {};
  let secondMatched = {};
  for (let i = 0; i < firstInput.length; i++) {
    const temp = firstInput.charAt(i);
    firstMatched[temp] = firstMatched[temp] ? ++firstMatched[temp] : 1;
  }

  for (let i = 0; i < SecondInput.length; i++) {
    const temp = SecondInput.charAt(i);
    secondMatched[temp] = secondMatched[temp] ? ++secondMatched[temp] : 1;
  }
  for (let k in firstMatched) {
    if (firstMatched[k] !== secondMatched[k]) return false;
  }
  return true;
}

console.log(sameFrequency(34563, 65433));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 2222));
console.log(sameFrequency(96854217, 17246859));
