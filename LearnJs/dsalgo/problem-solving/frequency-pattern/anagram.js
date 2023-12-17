const validAnagram = (first, second) => {
  if (first.length === second.length) {
    const containingElements = {};
    const containingSecondElements = {};
    for (let i = 0; i < first.length; i++) {
      const tempChar = first.charAt(i);
      containingElements[tempChar] = containingElements[tempChar]
        ? ++containingElements[tempChar]
        : second.includes(tempChar)
        ? 1
        : 0;
    }
    for (let j = 0; j < second.length; j++) {
      const tempChar = second.charAt(j);
      containingSecondElements[tempChar] = containingSecondElements[tempChar]
        ? ++containingSecondElements[tempChar]
        : first.includes(tempChar)
        ? 1
        : 0;
    }

    for (let k in containingElements) {
      if (containingElements[k] !== containingSecondElements[k]) {
        return false;
      }
    }
    const elementPresent = Object.values(containingElements).includes(0);
    return true;
  } else return false;
};

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));