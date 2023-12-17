function isSubsequence(first, second) {
  firstInp = first.split("");
  secondInp = second.split("");
  tempChars = [];
  for (let k of secondInp) {
    if (first.includes(k)) {
      tempChars.push(k);
    }
  }
  firstInp = [...new Set(firstInp)].join("");
  secondInp = [...new Set(tempChars)].join("");

  if (firstInp == secondInp) return true;
  return false;
}

console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
