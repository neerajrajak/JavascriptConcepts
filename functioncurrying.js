// Function currying

let multiple = function(x, y){
    console.log(x * y); 
}

multiple(2, 3);

const bindCurrying = multiple.bind(this, 5); 
bindCurrying(3);
bindCurrying(11);

let area = function(length){
    return function(breadth){
        return function(height){
            console.log(length * breadth * height);
        }
    }
}

area(12)(8)(10);

let constantLength = area(12);
constantLength(15)(6);