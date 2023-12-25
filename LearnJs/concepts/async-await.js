/*
What is async
    - always returns a promise
    - if you don't return a promise and return a value then it will wrap your value inside a promise and it will return a promise only
*/

const dummyPromise = new Promise((resolve, reject)=>{
    resolve('Promise resolved value');
})
async function getData(){
    // return 'Normal String' wrap this string in promise and then it is returned
    return dummyPromise;
}
// const dataPromise = getData();

// console.log(dataPromise);

// dataPromise.then(res => console.log(res))
// .catch(err => console.log(err));

/*
What is await?
    - async and await are used to handle promises
    - await can only be used inside async function
*/

function oldWay(){
    dummyPromise.then(res=> console.log('Old way: ', res))
}

async function newWay(){
    const res =  await dummyPromise;
    console.log('New way: ',res);
}

// oldWay();
// newWay();

/*
    How async await works behind the scenes?
*/

const behindTheScene = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promise resolved value behind the scenes');
    }, 10000);
})

const behindTheScene2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promise resolved value behind the scenes 2');
    }, 20000);
})
function oldWayExample(){
    behindTheScene.then(res=> console.log('Old way: ', res));
    console.log('Am I printed first');
}

async function newWayExample(){
    // debugger;
    console.log('Hello newWayExample.');
    const res =  await behindTheScene;
    // debugger;
    console.log('Hey Am I waiting for promise to complete');
    console.log('New way: ',res);

    const res2 =  await behindTheScene2;
    // debugger;
    console.log('Hey Am I waiting again for promise to complete');
    console.log('New way: ',res2);
}

// oldWayExample();
// newWayExample();

/*
Working =>
    - Javascript engine will run the first console.log immediately
    - then we have a promise to be resolved in 5 second so javascript engine will empty the call stack and wait for 5 seconds and den returns a value.
    - then again engine will wait for second promise to complete, and it waits another 5 seconds since it will resolve in 10 seconds
*/
const API_URL = 'https://api.github.com/users/neerajrajak';
async function apiCallUsingFetch(){
    try {
        const apiUrl = await fetch(API_URL);
        // const apiUrl = await fetch('fddsafsdfsdfs');
        const data = await apiUrl.json();
        console.log(data);
    } catch (error) {
        console.log('Error******* : ', error);
    }  
}

apiCallUsingFetch();