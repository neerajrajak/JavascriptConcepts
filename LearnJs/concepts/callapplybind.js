// Call Apply Bind

const myName = {
    firstName:"Neeraj",
    lastName:"Rajak"
}

const printFullname= function(profession, residesIn) {
    console.log(this.firstName + ' ' +  this.lastName+ ' is a '+ profession+ ' who resides in '+ residesIn);
}

const sportsmanName = {
    firstName:"Virat",
    lastName:"Kohli",
}

printFullname.call(sportsmanName, 'Cricketer', 'Delhi');
printFullname.apply(myName, ['Software Engineer', 'Thane']);

const printMyName = printFullname.bind(myName, 'Coder', 'Mumbai');
console.log(printMyName);
printMyName();  

