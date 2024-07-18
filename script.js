let x = prompt("Enter operation",)
let y = +prompt("Enter first number",)
let z = +prompt("Enter second number",)
let c = Math.random()
// console.log(c);
if (c < 0.1){
    if(x == "+"){
        document.write(y / z);
    }
    if (x == "-") {
        document.write(y + z);        
    }
    if (x == "*") {
        document.write(y - z);        
    }
    if (x == "/") {
        document.write(y * z);        
    }
}

else{
    if(x == "+"){
        document.write(y + z);
    }
    if (x == "-") {
        document.write(y - z);        
    }
    if (x == "*") {
        document.write(y * z);        
    }
    if (x == "/") {
        document.write(y / z);        
    }
}

