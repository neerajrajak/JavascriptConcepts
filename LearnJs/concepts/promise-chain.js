const cartITems = ["shoes", "tshirts", "mobiles"];

const promise = createOrder(cartITems); // returns orderid

console.log(promise);
promise
    .then((res) =>  res)
    .then((orderId)=>{
        console.log("Order created with OrderId: "+ orderId);
        return proceedToPayment(orderId);
    })
    .then((isPayment)=>  isPayment)
    .then((paymentDone)=>{
        return showOrderSummary(paymentDone);
    })
    .then((isSummary)=>{
        if(isSummary){
            console.log('Order is Summarized');
        }
    })
    .catch((err)=> console.log(err.message))
    .then((res)=> console.log("I will be called."));

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    // validate cart
    if (!cart?.length) {
      const err = new Error("Cart is not valid.");
      reject(err);
    }

    // Below we can have service calls to create order I am writing hardcoded
    const orderId = "O113";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 2000);
    }
  });
  return promise;
}

function proceedToPayment(orderId){
    return new Promise((resolve, reject)=>{
        if(orderId){
            setTimeout(() => {
                resolve(true);
              }, 3000);
        }else{
            reject(new Error('No order found for payment.'))
        }
    });
}

function showOrderSummary(isPayment) {
    return new Promise((resolve, reject)=>{
        if(isPayment){
            resolve(true);
        } else{
            reject(new Error('No Order Summary since payment not done'))
        }
    });
}

// updateWallet
