
function recursiveRange(range){
   if(range === 0) return 0;
   return range + recursiveRange(range - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));