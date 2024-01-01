"use strict"

// this in global space

console.log('Inside global',this);    // value of global object in the browsers i.e window object here
                      // every js runtime will have different value of this
                      // in nodejs it is => global

// this inside function
function x(){
    console.log('Inside function: ',this);  
}

x();
// this works different in strict mode
// this keyword inside a function depends on strict and non strict mode
// non strict mode value will be window or else it is undefined


// this substitution (in non strict mode)
// if value of this is undefined or null
// this will be replaced with global object only in non strict mode

// value of this keyword depends on how this is called (window)
window.x();


// this inside object method - value of this is object below

const employee = {
    name:'Neeraj Rajak',
    printName: function(){ // function inside an object is called method
        console.log('Inside an object method: ',this.name);
    }
}

const employee2 ={
    name: 'Anikesh Dhanokar'
}

employee.printName();



// call, apply and bind methods(sharing methods)
employee.printName.call(employee2);

// value of this is overriden by passing the object not having printName object



 /**this inside arrow function
  * 
  * value of this keyword is the value of its enclosing lexical context
  */

 const obj = {
    a:10,
    x:()=>{
        console.log('Inside arrow function: ',this);  // here lexical scope is in global space i.e. window
    }
 }

 const obj2 = {
    a:10,
    x:function(){
        const y = ()=>{
            console.log('Inside arrow function under method of an object: ',this); // lexical scope is function hence it belongs to object
        }
    y(); 
    }
 }

 obj.x();
 obj2.x();


 // this inside DOM element => reference to the html element