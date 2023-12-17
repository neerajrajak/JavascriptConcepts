// Q1) Predict the Output

const func = (function (a) {
    delete a;
    return a;
  })(5);
  
  console.log(func); // maybe not defined
  
  /*
      Output - 5
      Explanation - delete can delete properties from an object and not local variable
  */
  
  // Q2) How to add property like below
  console.log("=================================================");
  console.log("How to add property like below?");
  const property = "firstName";
  const value = "Neeraj Rajak";
  
  const user = {
    firstName: "Neeraj Rajak",
  };
  
  const wrongWay = {
    property: value,
  };
  console.log(wrongWay); // {property: "Neeraj Rajak"}
  
  const rightWay = {
    [property]: value,
  };
  
  console.log(rightWay); //{ firstName: "Neeraj Rajak"}
  
  // Q3) Loop through each keys and values of an object
  console.log("=================================================");
  console.log("Loop through each keys and values of an object?");
  
  const dummy = {
    name: "Looper",
    style: "Cooper",
    smile: "super",
  };
  
  console.log(Object.keys(dummy)); // return array of keys - ['name', 'style', 'smile']
  console.log(Object.values(dummy)); // return array of values - ['Looper', 'Cooper', 'super']
  
  // There are two ways to loop through an object
  
  for (let k in dummy) {
    console.log("current key : ", k);
    console.log("Value of current key : ", dummy[k]);
  }
  
  // Another way is to iterate through its keys
  for (let k of Object.keys(dummy)) {
    console.log("Another way, current key : ", k);
    console.log("Another way, value of current key : ", dummy[k]);
  }
  
  // Q4) Predict the output
  console.log("=================================================");
  console.log("Predict the output of repeating same key in an object");
  
  const repeatedKeys = {
    a: 23,
    b: 27,
    a: 31,
  };
  
  console.log(repeatedKeys); // a value wil be replaced with 31 - {a: 31, b: 27}
  
  // Q5) Multiply all numeric property by two
  console.log("=================================================");
  console.log("Multiply all numeric property by two");
  
  const numeric = {
    a: 12,
    b: 19,
    c: "hello",
  };
  
  for (let k in numeric) {
    if (typeof numeric[k] == "number") {
      numeric[k] = numeric[k] * 2;
    }
  }
  
  console.log(numeric); // {a: 24, b: 38, c: 'hello'}
  
  // Q6) Predict the output - assign object to empty object as key
  console.log("=================================================");
  console.log("Predict the output - assign object to empty object as key");
  
  let a = {};
  let b = { key: "b" };
  let c = { key: "c" };
  
  a[b] = 123;
  a[c] = 240;
  
  console.log(a[b]); // 240
  console.log(a); // {[object Object]: 240}
  
  /*
      Explanation: In the above example we are trying to assign an object as a key
      so when we assigned : a[b] = 123
      it was assigned like: a[object object] = 123; since b is a object passed as key and cannot be converted to string
      again when we assigned a[c] = 240
      it was assigned like: a[object object] = 240; since b is a object passed as key and cannot be converted to string
  
      so value of [object object] got replaced and 240 is stored in a single key
  */
  
  // Q7) JSON.strignify and JSON.parse
  console.log("=================================================");
  console.log("JSON.strignify and JSON.parse");
  
  const normalObject = {
    name: "Neeraj",
    profession: "programmer",
  };
  
  // Convert object into json string
  const strignified = JSON.stringify(normalObject);
  console.log(strignified);
  
  // Convert strignified object to normal object
  console.log(JSON.parse(strignified));
  
  // Primary use case in localStorage or Session storage
  localStorage.setItem("test", strignified);
  console.log(localStorage.getItem("test"));
  
  const localExample = {
    userName: "neeraj",
    level: 14,
    health: 90,
  };
  
  const localData = JSON.stringify(localExample, ["level", "health"]);
  // deconstruction example: it will only strignify level and health property of localExample
  
  console.log(localData); // {"level":14,"health":90}
  
  // Q8) Predict the output on Spread Operator
  console.log("=================================================");
  console.log("Predict the output on Spread Operator");
  
  console.log([..."spread"]); // ['s', 'p', 'r', 'e', 'a', 'd']
  
  const newuser = {
    userName: "neeraj",
    age: 30,
  };
  
  const admin = {
    isAdmin: true,
    ...newuser,
  };
  
  console.log(admin); // new user property will be assigned in admin properties
  
  // Q9) Predict the output on this reference in an object
  console.log("=================================================");
  console.log("Predict the output on this reference in an object");
  
  const shape = {
    radius: 6,
    getDiameter: () => 2 * this.radius,
    getArea: () => Math.PI * this.radius * this.radius,
  };
  
  console.log(shape.getDiameter()); // NaN
  console.log(shape.getArea()); // NaN
  
  /*
      Explanation: Here inside arrow function this belongs to global properties so this.radius will be undefined
      and 2* undefined will return NaN
  */
  
  // 10) What is destructuring?
  console.log("=================================================");
  console.log("What is destructuring?");
  
  const destructExample = {
    wish: "Hello",
    curse: "badwords",
    fullForm: {
      mc: "Maker Checker",
      bc: "binod chand",
    },
  };
  
  const { wish } = destructExample;
  console.log(wish); // Hello
  
  // 11) How can you rename destructured props
  
  const curse = "lot of bad words";
  
  const { curse: myCurse } = destructExample;
  
  console.log(curse); // lot of bad words
  console.log(myCurse); // badwords
  
  // 12) destructuring nested object
  
  const {
    fullForm: { mc, bc },
  } = destructExample;
  // console.log(fullForm); // {mc: 'Maker Checker', bc: 'binod chand'}
  console.log(mc, bc);
  
  // 13) Question on Rest parameter?
  console.log("=================================================");
  console.log("Question on Rest parameter?");
  
  function getFruits(fruitList, favouriteFruit, ...args){
      return [...fruitList, ...args, favouriteFruit];    // here we demonstrated spread operator can be used in between
  }
  
  console.log(getFruits(['banana', 'apple'], 'pear', 'orange'));  // [banana, apple, orange, pear]
  
  // 14) Question on Object References
  console.log("=================================================");
  console.log("Question on Object References");
  
  let ref = { greeting: 'Hello'};
  let dupRef;
  dupRef = ref;
  dupRef.greeting = "change ref"
  console.log(ref.greeting);  // bolo
  
  /*
      Here when we assign the value of ref to dupRef, it has done shallow copy sharing the same reference address
      and hence any change made on one object will reflect into another
  */
  
  console.log({a: 1} == {a: 1}); // false
  console.log({a: 1} === {a: 1}); // false
  
  /*
      In both the cases objects are different and stored in seperate memory location
  */
  
  let person = { name: 'Nidhi'};
  const members = [person];
  person = null;
  
  console.log(members); // [{name: 'Nidhi'}]
  
  /*
      if you see in our previous example one object ref was copied to another
      but in case of members me are assigning person value to merbers[0] i.e. hard copied value
      so any change in person value wont affect value of members at particular index it has stored person value
  */
  
  const dummyValue = {num: 10};
  
  const multiply = (x = {...dummyValue})=>{
      console.log(x.num *= 2);
  }
  
  multiply(); // 20  since we have not provided any value to multiply, the default value is being copied - pass by value
  multiply(); // 20  same is the case here
  multiply(dummyValue); // 20  here we are passing value by reference
  multiply(dummyValue); // 40  in above method since we passed the value by reference and the refrence value got updated to 20 before hence 40
  
  
  // 15) Question on Function References
  console.log("=================================================");
  console.log("Question on Function References");
  
  let changeReference = (person)=>{
    person.age = 32;
    person = {
      name: 'Neeraj',
      age: 31
    };
    return person;
  }
  
  const personObj1 = {
    name: 'Arun',
    age: 23
  }
  
  const personObj2 = changeReference(personObj1);
  
  console.log(personObj1);  // {name: 'Arun', age: 32}   
  console.log(personObj2);  // {name: 'Neeraj', age: 31}
  
  /*
    for person1 reference gets modified
    for person2 since we are reassigning the complete object its not going to modified
  */
  
  
  // 15) Shallow copy vs deep copy
  console.log("=================================================");
  console.log("Shallow copy vs deep copy");
  
  let objectToCopy = {
    course:'IT',
    result: 'pass',
    printResult(){
      console.log(this.course + ' is '+ this.result);
    }
  }
  
  // Shallow object
  let copiedObj = objectToCopy;
  copiedObj.printResult = function(){
    console.log(this.course + ' was '+ this.result);
  }
  copiedObj.result = 'fail';
  
  console.log("Shallow Copy");
  console.log(objectToCopy);
  console.log(copiedObj);
  
  console.log(objectToCopy.printResult());
  console.log(copiedObj.printResult());
  
  // Deep Copy
  
  let deepObjectToCopy = {
    course:'IT',
    result: 'pass',
    getResult(){
      console.log(this.course + ' is '+ this.result);
    }
  }
  
   let copiedDeep = Object.assign({}, deepObjectToCopy);
  // let copiedDeep = {...deepObjectToCopy};
  // let copiedDeep = JSON.parse(JSON.stringify(deepObjectToCopy));
  
  // copiedDeep.getResult = function(){
  //   console.log(this.course + ' was '+ this.result);
  // }
  console.log("Deep Copy");
  
  copiedDeep.result = 'promoted'
  deepObjectToCopy.course = 'Mechanical'
  
  console.log(deepObjectToCopy);
  console.log(deepObjectToCopy.getResult());
  console.log(copiedDeep);
  console.log(copiedDeep.getResult());
  
  
  
  