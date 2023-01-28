
// Event Bubling vs Event Capturing/Trickling

document.querySelector('#grandparent')
  .addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("granparent clicked..");
}, false);

document
  .querySelector("#parent")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("parent clicked..");
}, false);

document
  .querySelector("#child")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("child clicked..");
}, false);


/*
In the above example, if we click child div then bydefault event will propagate from child to topmost parent
By default, the third parameter in addEventListener method is false,
This 3rd parameter denotes whether we want event to be bubled or captured.

Default Output or false as third parameter,

if we click on clild: 
    child clicked..
    parent clicked..
    grandparent clicked..

if we click on parent:
    parent clicked..
    grandparent clicked..

if we click on grandparent:
    grandparent clicked..


In case 3rd parameter is true the event will be captured not bubled

if we click on clild: 
    granparent clicked..
    parent clicked..
    child clicked..

if we click on parent:
    granparent clicked..
    parent clicked..

if we click on grandparent:
    granparent clicked..

If we want to stop this bubling or capturing use => event.stopPropagation
*/



