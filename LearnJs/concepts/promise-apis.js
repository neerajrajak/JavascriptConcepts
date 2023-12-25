/*
-----------
Promise.all
------------
Consider we have three promises 
P1 => takes 3 sec to complete
p2 => takes 1 sec
P3 => 2 sec

when we call promise.all([p1,p2,p3])

When all 3 promises are success it will return result as [res1, res2, res3] in 3 sec (highest times taken by promises)

When any one promise fails/rejected it returns Error.

For Eg. P2 having lowest execution times fails, then it doesn't wait for p1 and p3 to complete it returns error in 1 sec

Promise.all will either return result if all the promises are resolved or it will return error if any one promise fails.

If we want to get result for the promises which are resolved we can use allSettled method

-------------------
Promise.allSettled
-------------------

when we call promise.allSettled([p1,p2,p3])

here suppose p3 failed and p1 p2 are resolved

it will return result as [res1, res2, err]

In allSettled, we will actually get results for the promises which are resolved, and error for promise which are rejected

-------------
Promise.race
-------------

consider same 3 promises

when we call Promise.race([p1,p2,p3]) => p2(since it takes one sec)

It will return the promise which is resolved in lowest execution time i.e p2 in our case

If p2 is rejected then promise.race will return error

Whatever is the response of fastest promise will be returned whether it is resolved or rejected

------------
Promise.any
------------
It is similar to race, the only difference is it will wait for the first resolved promise and return the same.

Eg. if p2 is resolved being the fastest, it will return p2
    if p2 fails then it will return second fastest P3 if it is resolved, i.e p3
    if p2 and p3 fails and p1 is resolved, then it will return p3

    if all promis fails it will return Aggregated error => [err1, err2, err3]
*/


const p1 = new Promise((resolve, reject)=>{
    // setTimeout(() => resolve('P1 success'), 3000);
    setTimeout(() => reject('P1 Failed'), 3000);
});

const p2 = new Promise((resolve, reject)=>{
   // setTimeout(() => resolve('P2 success'), 1000);
   setTimeout(() => reject('P2 Failed'), 1000);
});

const p3 = new Promise((resolve, reject)=>{
    //setTimeout(() => resolve('P3 success'), 2000);
     setTimeout(() => reject('P3 Failed'), 2000);
});

// Promise.all([p1, p2, p3])
// .then((res)=> console.log('all =>',res))
// .catch(err=> console.log('all error =>',err))

// Promise.allSettled([p1, p2, p3])
// .then((res)=> console.log('allsettled =>',res))
// .catch(err=> console.log('allsettled error => ',err))

// Promise.race([p1, p2, p3])
// .then((res)=> console.log('race =>',res))
// .catch(err=> console.log('race error =>',err))

Promise.any([p1, p2, p3])
.then((res)=> console.log('any =>',res))
.catch(err=> console.log('any error =>',err.errors))



/*

Promise lingos

    Settled =>  got the results i.e can be a resolved result or rejected result

       if settled result is positive: resolve, success, fullfilled
       if settled result is error: reject, failure, rejected
*/

