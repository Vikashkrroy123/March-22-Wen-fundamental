//1. Take 3 inputs (number ) from the user and show minimum of the three.

        const a = prompt("Enter the value of a")
        const b = prompt("Enter the value of b")
        const c = prompt("Enter the value of c")
        const num1 = parseInt(a)
        const num2 = parseInt(b)
        const num3 = parseInt(c)
        console.log("The value of a,b,c is",a, b, c)
        if(num1<num2 && num1<num3){
    console.log("The smallest value will be =" +num1)
}
else if (num2<num1 && num2<num3){
    console.log("The smallest value will be =" +num2)
}
else{
    console.log("The smallest value will be =" +num3)
}
        
