/*

- Major difference between debouncing and throttling is -
    - debouncing will make a function call between the pause of two key stroke event
    - while throttling will not wait for the user to pause typing instead it will be called on every interval we give

Consider a scenario where we need to find,How many timesuser resizes the browser, track how frequently he does that

- If user resize the window many times so calling an api every time user resizes will lead to performance issue

- In this scenario if we use debouncing, then it will wait for the user to pause resizing and then function is call, so we will not get
the accurate result since we will be unable to track user activity of number of time he is resizing it,
in this case throttling will make more sense to use

- consider another scenario of a game shooting where user needs to trigger ak f7 kind of gun, here bullets should be loaded on every
time interval, here throttling makes more sense

*/

const callExpensiveApi = () => {
  console.log("Please call me carefully, I am expensive");
};

const throttled = (fun, timeBreak) => {
  let isCalled = true;
  return () => {
    if (isCalled) {
      fun();
      isCalled = false;
      setTimeout(() => {
        isCalled = true;
      }, timeBreak);
    }
  };
};

const optimizedThrottle = throttled(callExpensiveApi, 1000);
