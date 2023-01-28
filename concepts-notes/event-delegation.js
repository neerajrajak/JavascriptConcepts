
/*
Event Delegation =>
        In simple terms, event delegation is a process of delegating the functionality of its own element to other.
        Event delegation is only possible because of event bubbling
*/


// Example 1: 
document.querySelector("#category").addEventListener("click", (e) => {
//    Here we are checking only categories listed with li tag should be redirected and no other elements other than that
  if (e.target.nodeName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

/*
    - In our first example, we have added a click listener to the parent element of every category.
    - Suppose if we are having an ecommerce website, and on click of each category we need to redirect to a particular web page 
    belonging to that category, then we need to write so many event listeners code to handle each category which seems to be not
    feasible if a website has more and more categories.
    - In this scenario, we have delegated event of each category in our example to parent and based on which it is handled accordingly
*/

// Example 2:
document.querySelector("#main").addEventListener("keyup", (e) => {
    dataset = e.target.dataset;
    if(dataset.hasOwnProperty('uppercase')){
        e.target.value = e.target.value.toUpperCase();
    }
  });

/*
    - In our second example we have used an event delegation for every attribute having dataset uppercase,
    so suppose in a form at start only 2 input box needed to be having same functionality of converting it into uppercase,
    later if we want more and more inputs to be having same functionality we wont be writing seperate event handlers rather
    we will just add that attribute 
*/ 

/*
Benefits of event delegation:
- improves memory space
- write less code
- mitigates risk of performance bottle neck
- Dom manipulation
- when elements get added dynamically, the process of adding events is slow

Limitations:
- All the events are not bubbled up, some events like blur, focus are not bubbled up
- if e.stopPropogation is used in child, then events are not bubbled up
*/





