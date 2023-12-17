// Polyfill for Bind

const myName = {
    firstName:"Neeraj",
    lastName:"Rajak"
}

const printName= function(prof, dest, fromFun) {
    console.log(this.firstName + ' ' +  this.lastName +', '+prof+ ', '+dest+ ' ,'+fromFun);
}
 
let printMyName = printName.bind(myName, 'IT Analyst', 'using bind');
printMyName('bind using Name');

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.splice(1);
    return function(...functionArgs){
        obj.apply(args[0], [...params, ...functionArgs]);
    }
};

let printCustomBindName = printName.myBind(myName, 'Consultant');
printCustomBindName('using myBind', 'myBind using custom');

