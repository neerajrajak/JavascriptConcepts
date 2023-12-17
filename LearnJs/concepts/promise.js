
/*
Consider our example of callback hell
*/

const cartITems = ["shoes", "tshirts", "mobiles"];


// using callback
createOrder(cart, function(orderId){
    // call api to create order and then proceed for payment
    proceedToPay(orderId);
});


// using fetch api
const promise = fetch('api url');

    promise.then((res)=> {
        console.log("Do something with result",res);
        proceedToPay(res.orderId);
    })
    .catch(err=> console.log("Do Something after error"))
    .finally(()=> console.log("Free some resource"));

/*
    - In callback approach we are passing a function as a callback function to createOrder,
      here it is not gauranteed that whether our proceed to pay function will be called or not
      since we are totally relying on createOrder to execute.
      Also to add error handling scenarios 

    - In second approach we are using promise api where basically we have attached our function
      to promise which is gauranteed to be executed if promise is successfull or else we can handle
      error in the catch block or do some resource cleaning in finally;



      ****
      A Promise is an object representing eventually completion or failure of asynchronous operations.
*/


// Promise Chain

addToCart(cart)
    .then((res)=> addAddress(res.productDetails))
    .then((res)=> proceedToPay(res.orderDetails))
    .then((res)=> createOrder(res.productCosting))
    .then((res)=> showOrderSummary(res.orderDetails))
    .then((res)=> updateWallet(res.orderDetails));

/*
    as we see above promise makes our code more readable and lineant for the callback hell we faced in our callbackhell.js example
*/    


/*
    1. What are Promises?
        Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

    2. Importance of Promises:
        a) Promises can help us to write trust worthy code.
        b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
        c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
        d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
        e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.
*/
