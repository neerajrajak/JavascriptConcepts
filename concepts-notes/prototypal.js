

let arr = ['Neeraj', 'Arun'];

let obj = {
    name:'Neeraj',
    city:'Thane',
    getIntro: function(){
        console.log(this.name+ ' from '+ this.city);
    }
}

function fun(){}

/*
What is Prototype?
- In simple words Prototype is a set of properties and methods which is hidden but can be accessed through its
- like in our example

    if we do arr.  we will get a set of methods which is a prototype of an array
    Eg : methods like filter, find etc

    do it in browser below:

    arr.__proto__ is same as Array.prototype

    Similarly for objects:

    if we do obj.   we will get a set of methods of an object

    obj.__proto__  is same as Object.prototype

- prototype chaining: 

    arr.__proto__ we get Array.prototype
    arr.__proto__.__proto__ we get Object.prototype
    arr.__proto__.__proto__.__proto__  null
*/


let obj2 = {
    name: 'Akshay'
}

// Never do this it cost performance issue there are other ways, this is just for understanding purpose

obj2.__proto__ = obj;

/*
How can an object inherit properties and methods from another object?
- We have assigned properties of obj into obj2 by updating the prototype of obj2 and assigning it to obj

obj2 
=> {name: 'Akshay'}
Explanation: Here it returns its own property i.e. name

obj2.__proto__
{name: 'Neeraj', city: 'Thane', getIntro: ƒ}
Explanation: Here it returns obj properties and methods since this has been inherited

obj2.city
=> 'Thane'
Explanation: Here first it checks whether city presents in its own property and if not found then it checks its parent
from which it has been inherited and if found it returns that result

obj.getIntro()
=> Neeraj from Thane
Explanation: getIntro called from obj hence return the result based on its own properties

obj2.getIntro()
=> Akshay from Thane
Explanation: here obj2 got access of getIntro from obj and it returns its own name property and obj city property
*/

Function.prototype.newFun = function(){
    console.log('Hello, I am available to all');
}

function fun1(){}
function fun2(){}

/*
Assign a function to a prototype which is available to all?

fun1.newFun()
=> Hello, I am available to all

fun2.newFun()
=> Hello, I am available to all

Explanation: Here, we have assigned a new method to Function protoype and hence it
is available to all the function
*/