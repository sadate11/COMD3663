// Function to Add
const addNums = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = sum;
}
document.getElementById("add").addEventListener("click", addNums);


// Function to Multiply
const multiplyNums = () => {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let multiply = num3 * num4;
    document.getElementById("result2").innerHTML = multiply;
}
document.getElementById("multiply").addEventListener("click", multiplyNums);


// Function to Divide
const divideNums = () => {
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let divide = num5 / num6;
    document.getElementById("result3").innerHTML = divide;
}
document.getElementById("divide").addEventListener("click", divideNums);


// Function to Divide (Rounding off) 
const divideNumsFixed = () => {
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    let divide = num7 / num8;
    const divideFixed = divide.toFixed(2);
    document.getElementById("result4").innerHTML = divideFixed;
}
document.getElementById("divide2").addEventListener("click", divideNumsFixed);



// Function to Substract
const substractNums = () => {
    let num9 = document.getElementById("num9").value;
    let num10 = document.getElementById("num10").value;
    let substract = num9 - num10;
    document.getElementById("result5").innerHTML = substract;
}
document.getElementById("substract").addEventListener("click", substractNums);


// Function for Modulo
const leftOver = () => {
    let firstNum = document.getElementById("num11").value;
    let secondNum = document.getElementById("num12").value;
    let remainder = firstNum % secondNum;
    document.getElementById("remainder").innerHTML = remainder;
}
document.getElementById("modulo").addEventListener("click", leftOver);