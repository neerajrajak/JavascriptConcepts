
// sum(1)(2)(3)..(n)


let sum = (a)=>{
    return (b)=>{
        if(b){
            return sum(a+b);
        } else {
            return a;
        }
        
    }
}

let sumNew = a => b => b ?  sum(a+b): a

console.log(sumNew(1)(2)(3)(4)(5)());