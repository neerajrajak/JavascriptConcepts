function fib(max){
      if(max <= 0) return 0; 
      else if(max == 1) return 1;
      return fib(max-1)+fib(max-2);
  } 


  // fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

console.log(fib(4));
console.log(fib(10));