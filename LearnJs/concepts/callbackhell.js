const cartITems = ["shoes", "tshirts", "mobiles"];

/*
    Consider we have an ecommerce website and below api sequence to be executes

    addToCart -> addAddress -> proceedToPay -> createOrder -> showOrderSummary -> updateWallet

    If we use callback this is how the code will look like

*/

function updateWallet() {
  // call api to updateWallet
}

function showOrderSummary(fn) {
  // call api to proceedToPay
}

function createOrder(fn) {
  // call api to proceedToPay
}

function proceedToPay(fn) {
  // call api to proceedToPay
}

function addAddress(fn) {
  // call api to add address
}

function addToCart(cart, fn) {
  // call api to add to cart
}

addToCart(cart, function () {
  // call api to add address
  addAddress(function () {
    // call api to add address
    proceedToPay(function () {
      // call api to proceedToPay
      createOrder(function () {
        // call api to proceedToPay
        showOrderSummary(function () {
          // call api to proceedToPay
          updateWallet(function () {
            // call api to updateWallet
          });
        });
      });
    });
  });
});

/*
        We all know that javascript is single threaded and synchronous, and to accomplish
        the above async behaviour we have used callback.
        If we see above code we are calling apis after execution of one api,
        what if any one api fails and the chain breaks
        So using callback is a bad idea for such a complex scenario where we are dependent on
        one function to be executed before we execute another function

        Problems:
            callback hell
                - code maintenance is heavy
                - error handling will be tedious

            Inversion of control    
                - we are relying on one function to be executed successfully to execute next function 
                we are passing as an argument(callback)
    */

// Simple callbacks like setTimeout function

setTimeout(() => {
  // call a function after 5sec
}, 5000);
