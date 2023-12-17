
function reverse(input){
    let reversed = [];
    if(!input.length) return reversed;
    let toReverse = input.split('');
    reversed.push(toReverse[toReverse.length - 1]);
    toReverse.pop();
    return reversed.concat(reverse(toReverse.join(""))).join("");
}


console.log(reverse("awesome"));
console.log(reverse('rithmschool'));