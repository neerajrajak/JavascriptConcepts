function isPalindrome(inputString) {
    if(!inputString.length) return false;
    function reverse(input) {
        let reversed = [];
        if (!input.length) return reversed;
        let toReverse = input.split("");
        reversed.push(toReverse[toReverse.length - 1]);
        toReverse.pop();
        return reversed.concat(reverse(toReverse.join(""))).join("");
      }
    return inputString === reverse(inputString)
}


console.log(isPalindrome('tacocat'));
console.log(isPalindrome('foobar'));