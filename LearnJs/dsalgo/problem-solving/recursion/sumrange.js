function sumeRange(num){
    if(num === 1) return 1;
    return num + sumeRange(num - 1);
}


console.log(sumeRange(10));