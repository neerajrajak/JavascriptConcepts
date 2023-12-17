console.log("Learning Debouncing");

let counter = 0;
const getData = () => {
  // Calls and api and return result
  console.log("Fello ", counter++);
};

// Akshay Saini way
const debouncingExample = function(fn, delay){
    let timer;
    return function(){
        let context = this;
        clearInterval(timer);
         timer = setTimeout(()=>{
            fn.apply(context, arguments);
         }, delay);
    }
}

// My way
const debouncingMyExample = (fn, delay) => {
  let timer;
  return () => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const optimizedGetData = debouncingMyExample(getData, 500);


/*
-Debouncing in simple term is a wrapper function around the actual function call, which can help to delay
the actual function call
-In the example above, we have implemented a kind of a function call which is getting called on every key
stroke event, suppose the actual function is returning a result from api.
-If we call that function directly there will be an api call on every key pressed which will lead to a 
lot of api calls and performance issue.
-To solve this problem we have created a debounce method which takes two parameters, one the actual function
and other the delay i.e. the moment user take a small pause of x milisecond then call api

Examples
    - Returning search results
    - calling an api on scroll event
    - calling an api on window resizing event
*/
